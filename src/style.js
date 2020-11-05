import { StyleSheet, Dimensions } from 'react-native';

export const introduction = StyleSheet.create({
    container: {
        flex: 1,
    },
    banner: {
        height: Dimensions.get('window').height / 3,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'teal',
    },

    bannerText: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'white'
    }
})

