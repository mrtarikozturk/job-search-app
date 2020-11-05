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

// Jobs Page
export const jobs = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        height: Dimensions.get('window').height / 10,
        backgroundColor: 'teal',
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerText: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        padding: 5,
        color: 'white',
    }

});

// JobItem Component
export const jobItem = StyleSheet.create({
    container: {
        padding: 12,
        margin: 7,
        borderRadius: 6,
        borderWidth: 1,
        borderColor: '#bdbdbd',
    },
    title: {
        fontWeight: 'bold',
    },
});


