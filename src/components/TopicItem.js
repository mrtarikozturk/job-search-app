import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

//My Import
import { topicItem } from '../style'

const TopicItem = (props) => {
    return (
        <TouchableOpacity
            style={[topicItem.container, { backgroundColor: props.item.color }]}
            onPress={props.onPress}>
            <Text style={topicItem.text}>{props.item.name}</Text>
        </TouchableOpacity>
    )
}

export { TopicItem };
