import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Introduction, Jobs, SavedJobs } from './pages';

const Router = () => {

    const Stack = createStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName={Introduction}
                screenOptions={{
                    headerShown: false,
                    gestureEnabled: true,
                    gestureDirection: "horizontal"
                }}
            >
                <Stack.Screen name='Intro' component={Introduction} options={{ title: 'Giris Sayfasi' }} />
                <Stack.Screen name='Jobs' component={Jobs} />
                <Stack.Screen name='SavedJobs' component={SavedJobs} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Router;
