import React from 'react';
import { View, Text, Button } from 'react-native';
import Modal from 'react-native-modal';

//My Imports
import { modalx } from '../style';

const ModalX = (props) => {
    return (
        <Modal
            isVisible={props.isVisible}
            onBackdropPress={props.closeModalX}
        >
            <View style={modalx.container}>
                <View style={modalx.header}>
                    <Text style={modalx.title}>{props.data.title}</Text>
                    <Text>{props.data.location}</Text>
                    <Text>{props.data.company}</Text>
                </View>
                <View style={modalx.description}>
                    <Text numberOfLines={5}>{props.data.description}</Text>
                </View>
                <Button title='Save' onPress={props.saveJob} />
            </View>
        </Modal>
    )
}

export { ModalX };
