import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

//My imports
import { jobItem } from '../style';

const JobItem = (props) => {
    return (
        <TouchableOpacity
            style={jobItem.container}
            onPress={props.onPress}
        >
            <Text style={jobItem.title}>{props.data.title}</Text>
            <Text style={jobItem.type}>{props.data.type} / {props.data.location}</Text>
        </TouchableOpacity>
    )
}

export { JobItem };
