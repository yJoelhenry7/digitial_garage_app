import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import MenuScreen from './screens/MenuScreen';
import CartScreen from './screens/CartScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import LoginScreen from './screens/LoginScreen';



const StackNavigator = () => {
    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen} options={{headerShown:false}}/>
                <Stack.Screen name="Menu" component={MenuScreen} options={{headerShown :false}}/>
                <Stack.Screen name="Cart" component={CartScreen} options={{headerShown :false}}/>
                <Stack.Screen name="Login" component={LoginScreen} options={{headerShown :false}}/>
                <Stack.Screen name="Welcome" component={WelcomeScreen} options={{headerShown :false}}/>

                
            </Stack.Navigator>
        </NavigationContainer>
    );
};


export default StackNavigator;
