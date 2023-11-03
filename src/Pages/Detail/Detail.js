import React from "react";
import { View, Text, StyleSheet, ScrollView, ActivityIndicator, Dimensions, Alert } from "react-native";
import Button from "../../Components/Button";
import { API_DETAIL_URL } from ".env"
import useFetch from '../../Hooks/useFetch';
import RenderHtml from 'react-native-render-html';
import { useDispatch, useSelector } from "react-redux";


function Detail({ route }) {

    
    const width = Dimensions.get('window').width;
    
    const { id } = route.params;
    const { error, loading, data } = useFetch(`${API_DETAIL_URL}${id}`)
    
    const dispatch = useDispatch();
    const storeId = useSelector(s => s.favoriteJob )

    // const addFav = () => {
    //    // dispatch({type : "ADD_FAV" , payload: {data} })
    //    if (storeId.find(eleman => eleman.id === id)) Alert.alert("Error", "Job has already added the favorities");
    //     else dispatch({ type: 'ADD_FAV', payload: {favorite } })
    // }

    const handleFavJob = () => {
        if (storeId.find(eleman => eleman.id === id)) Alert.alert("Error", "Job has already added the favorities");
        else
        dispatch({type: 'ADD_FAV_LIST', payload: {favoriteJob: data}});
      };

    if (loading) {
        return (
            <View style={{ flex: 1, justifyContent: "center" }}>
                <ActivityIndicator color="tomato" size="large" />
            </View>
        )
    }

    if (error) {
        return (
            <Text>{error}</Text>
        )
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>{data.name}</Text>
                <View style={{ flexDirection: "row" }}>
                    <Text style={styles.location}>Locations:</Text>
                    <Text style={styles.subLocation}> {data.locations[0].name} </Text>
                </View>
                <View style={{ flexDirection: "row" }}>
                    <Text style={styles.level}>Job Level:</Text>
                    <Text style={styles.subLocation}> {data.levels[0].name} </Text>

                </View>
                <Text style={styles.subTitle}>JOB DETAIL</Text>
            </View>

            <ScrollView style={styles.innerContainer}>
                <RenderHtml source={{ html: `${data.contents}` }} contentWidth={width} />

            </ScrollView>

            <View style={{ flexDirection: "row", justifyContent: "space-evenly", paddingTop: 15 }}>
                <Button text="Submit" icon="logout" />
                <Button text="Favorite Job" icon="cards-heart" onClick={() => handleFavJob()}/>

            </View>

        </View>
    )
}

export default Detail;


const styles = StyleSheet.create({

    container: {
        flex: 1,
        marginBottom: 20,
        paddingBottom: 20,
    },

    header: {
        flexDirection: "column",
        margin: 10,

    },

    title: {
        fontSize: 25,
        fontWeight: "700",
        color: "darkslategrey",
        paddingBottom: 8
    },

    location: {
        fontSize: 18,
        color: "tomato",
        paddingBottom: 8,
        fontWeight: "600",
    },

    level: {
        fontSize: 18,
        color: "tomato",
        fontWeight: "600",
    },

    innerContainer: {
        backgroundColor: "white",

    },
    subTitle: {
        fontSize: 19,
        fontWeight: "bold",
        color: "darkslategrey",
        alignSelf: "center",
    },

    subLocation: {
        fontSize: 18,
        color: "black",
        paddingBottom: 8,
        fontWeight: "600",
    }
})