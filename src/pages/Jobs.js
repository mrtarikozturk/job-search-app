import React, { useState, useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import axios from 'axios';

//My Import
import { JobItem, ModalX } from '../components';
import { jobs } from '../style';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Jobs = (props) => {

    const selectedLanguage = props.route.params.selectedLanguage;
    // const {selectedLanguage} = props.route.params; // alternative way

    //States
    const [data, setData] = useState({});
    const [ModalFlag, setModalFlag] = useState(false);
    const [selectedJob, setSelectedJob] = useState('');

    // useEffects
    useEffect(() => { fetchData() }, []);

    // Functions
    const fetchData = async () => {
        const response = await axios.get(`https://jobs.github.com/positions.json?search=${selectedLanguage.toLowerCase()}`);

        setData(response.data);
    }

    const renderJobs = ({ item }) => {

        return (
            <JobItem
                data={item}
                onPress={() => selectJob(item)}
            />
        )
    }

    const selectJob = (job) => {
        setModalFlag(true);
        setSelectedJob(job);
    }

    const saveJob = async () => {
        let storageList = await AsyncStorage.getItem('@SAVED_JOBS').catch(err => console.log(err));

        storageList = storageList == null ? [] : JSON.parse(storageList);

        const newList = [...storageList, selectedJob];

        await AsyncStorage.setItem('@SAVED_JOBS', JSON.stringify(newList));

        setModalFlag(false);
    }

    const closeModalX = () => setModalFlag(false);

    return (
        <View style={jobs.container}>
            <View style={jobs.header}>
                <Text style={jobs.headerText}>JOBS FOR {selectedLanguage.toUpperCase()}</Text>
            </View>
            <FlatList
                data={data}
                renderItem={renderJobs}
                key={(_, index) => index.toSting()}
            />
            <ModalX
                isVisible={ModalFlag}
                closeModalX={closeModalX}
                data={selectedJob}
                save={saveJob}
            />
        </View>
    )
}

export { Jobs };
