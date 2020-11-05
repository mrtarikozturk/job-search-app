import { StyleSheet, Dimensions } from 'react-native';

// Introduction Page
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

// TopicItem Component
export const topicItem = StyleSheet.create({
    container: {
        padding: 14,
        margin: 5,
        borderRadius: 8,
    },
    text: {
        fontWeight: 'bold',
        color: 'white',
    }
})
