import React from 'react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import Config from '../../../Config';
import JobsCard from '../../Components/JobsCard/JobsCard';
import useFetch from '../../Hooks/useFetch';
import {API_JOB_URL} from ".env"

const JobList = ({navigation}) => {

    const {data, loading, error} = useFetch(API_JOB_URL);

    const handleJobSelect = (id) => {
        navigation.navigate("Detail", {id});
    }

    const renderJob = ({ item }) => (
        <JobsCard job={item.name} company={item.company.name} location={item.locations[0].name} onSelect={()=>handleJobSelect(item.id)}/>
    )


    if(loading){
    return(
        <View style={{ flex:1,justifyContent:"center"}}>
            <ActivityIndicator color="tomato" size="large"/>
        </View>
    )
    }

    if(error){
        return(
            <Text>{error}</Text>
        )
    }

    return (
        <View>
        <FlatList
            data={data.results}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderJob}
        />
        </View>
    );
};

export default JobList;
