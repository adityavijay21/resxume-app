import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from "react-native-safe-area-context";
import BottomNavBar from "./components/BottomNavBar";
import ResumeBuilder from './components/resumeBuilder/ResumeBuilder';

const Stack = createStackNavigator();

const App = () => {
    return (
        <SafeAreaProvider>
            <NavigationContainer>
                <Stack.Navigator screenOptions={{ headerShown: false }}>
                    <Stack.Screen name="MainApp" component={BottomNavBar} />
                    <Stack.Screen name="ResumeBuilder" component={ResumeBuilder} />
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaProvider>
    );
};

export default App;