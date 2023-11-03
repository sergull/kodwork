import React from "react";
import {
    Text,
    View,
    FlatList
} from 'react-native';
import FavCard from "../../Components/FavCard";
import { useSelector, useDispatch } from "react-redux";

function FavList({navigation}) {

    const job = useSelector(state => state.favoriteJob);

    const dispatch = useDispatch();

    const handleRemoveFav = item => {
        dispatch({ type: 'REMOVE_FAV', payload: { job: item } });
    };

    const handleFavDetail = (id)=>navigation.navigate("FavDetail",{id})

    
    const renderFavJobs = ({ item }) => {
        return (
            <FavCard job={item.name} company={item.company.name} location={item.locations[0].name} onClick={() => handleRemoveFav(item)} onSelect={()=>handleFavDetail(item.id)}/>
        );
    };

    return (
        <View>
            <FlatList keyExtractor={(item) => item.id} data={job} renderItem={renderFavJobs} />
        </View>
    );
};


export default FavList;