import React from "react";
import { Text, View, StyleSheet,TouchableOpacity } from "react-native";
import {Dimensions} from 'react-native';
import Icon from "react-native-vector-icons/MaterialCommunityIcons"

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const RemoveButton = ({text, onClick}) => {


    return (
        <View style={{marginHorizontal:10, }}>
            <TouchableOpacity style={styles.container} onPress={onClick}>
                <Text style={styles.text}>{text}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default RemoveButton;

const styles = StyleSheet.create({
    container:{
        backgroundColor:"tomato",
        height:windowHeight/15,
        width:windowWidth/1.4,
        borderRadius:10,
        justifyContent:"center",
        margin:5
    },

    text:{
        color:"white",
        fontSize:18,
        fontWeight:"500",
        alignSelf:"center",
        
    },


})