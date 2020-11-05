import React from 'react';
import { View, Text, ScrollView } from 'react-native';

// My Imports
import { TopicItem } from '../components';
import { introduction } from '../style';

// My Languages Array
const topics = [
    {
        id: 0,
        name: 'Java',
        color: '#fb5607'
    },
    {
        id: 1,
        name: 'Python',
        color: '#007f5f'
    },
    {
        id: 2,
        name: 'Javascript',
        color: '#ffb703'
    },
    {
        id: 3,
        name: '.NET',
        color: '#023e7d'
    },
    {
        id: 4,
        name: 'Dart',
        color: '#001845'
    },
    {
        id: 5,
        name: 'Go',
        color: '#f8961e'
    },
    {
        id: 6,
        name: 'Ruby',
        color: '#e63946'
    },
    {
        id: 7,
        name: 'C',
        color: '#fb8b24'
    },
    {
        id: 8,
        name: 'C++',
        color: '#06d6a0'
    },
]

const Introduction = (prop) => {

    function selectLanguage(language) {
        props.navigation.navigate('Jobs', { selectedLanguage: language })
    }

    return (
        <View style={introduction.container}>
            <View style={introduction.banner}>
                <Text style={introduction.bannerText}>Choose your language....</Text>
            </View>
            <ScrollView>
                {
                    topics.map(item => {
                        return (
                            <TopicItem
                                key={item.id}
                                item={item}
                                onPress={() => { selectLanguage(item.name) }}
                            />
                        )
                    })
                }
            </ScrollView>

        </View>
    )
}

export { Introduction };
