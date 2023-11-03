import React from "react";
import { Text, View, StyleSheet,TouchableOpacity } from "react-native";
import {Dimensions} from 'react-native';
import Icon from "react-native-vector-icons/MaterialCommunityIcons"

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Button = ({text, icon, onClick}) => {


    return (
        <View style={{marginHorizontal:10, }}>
            <TouchableOpacity style={styles.container} onPress={onClick}>
                <View style={{alignSelf:"center", paddingRight:3}}>
                    <Icon name={icon} size={25} color="white"/>
                </View>
                <Text style={styles.text}>{text}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Button;

const styles = StyleSheet.create({
    container:{
        backgroundColor:"tomato",
        height:windowHeight/15,
        width:windowWidth/2.2,
        borderRadius:10,
        justifyContent:"center",
        flexDirection:"row"
    },

    text:{
        color:"white",
        fontSize:18,
        fontWeight:"500",
        alignSelf:"center",
        
    },

    icon:{
        color:"white",
        fontSize:18,
        fontWeight:"500",
        alignSelf:"center",
        paddingRight:5
    }
})