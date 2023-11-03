import React from "react";
import { View, StyleSheet, Text ,TouchableWithoutFeedback  } from "react-native";
import RemoveButton from "../RemoveButton";

const FavCard = ({job, company, location, onSelect, onClick}) => {
    
    return(
        <TouchableWithoutFeedback onPress={onSelect}> 
            <View style={styles.container}>
                <Text style={styles.title}>{job}</Text>
                <Text style={styles.subTitle}>{company}</Text>
                <View>
                    <View style={styles.locationCont}>
                        <Text style={styles.location}>{location}</Text>
                    </View>
                </View>
                <View style={styles.levetCont}>
                    <Text style={styles.level}>Mid Level</Text>
                </View>
                <View style={{alignItems:"center"}}>
                <RemoveButton text="Remove" onClick={onClick}/>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default FavCard;


const styles = StyleSheet.create({
    container:{
        backgroundColor:"white", 
        margin:10, 
        padding:10, 
        borderRadius:12, 
        flexDirection:"column",
        borderWidth:1,
        borderColor:"grey"
    },

    title:{
        fontSize:20,
        fontWeight:"600",
        marginBottom:7
    },
    subTitle:{
        fontSize:18,
        marginBottom:7
    },

    locationCont:{
        backgroundColor:"tomato",
        padding:5,
        borderRadius:15,
        paddingHorizontal:10,
        alignSelf:"flex-start"

    },

    location:{
        color:"white",
        fontWeight:"bold",
        
    },

    levetCont:{
        alignSelf:"flex-end",

    },

    level:{
        fontSize:18,
        fontWeight:"bold",
        color:"tomato"
    }

})

