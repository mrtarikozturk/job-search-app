import React, { useState, useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import axios from 'axios';

//My Import
import { JobItem, ModalX } from '../components';
import { jobs } from '../style';

const Jobs = (props) => {

    const selectedLanguage = props.route.params.selectedLanguage;
    // const {selectedLanguage} = props.route.params; // alternative way

    //States
    const [data, setData] = useState({});
    const [ModalFlag, setModalFlag] = useState(false);
    const [selectedJob, setSelectedJob] = useState('');


    const fetchData = async () => {
        const response = await axios.get(`https://jobs.github.com/positions.json?search=${selectedLanguage.toLowerCase()}`);

        setData(response.data);
    }
    console.log(data);

    useEffect(() => { fetchData() }, []);

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
                closeModalX={() => setModalFlag(false)}
                data={selectedJob}
            />
        </View>
    )
}

export { Jobs };
