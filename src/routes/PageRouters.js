
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import  Home  from '../pages/home';



const Stack = createStackNavigator();

const AppRouters = () => {
  return (
    <Stack.Navigator 
        screenOptions={{headerShown: false}}
    >
        <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}

export default AppRouters;