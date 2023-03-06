
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import  Login  from '../pages/login';
import Signup from '../pages/signup';
import Onboarding from '../pages/onboarding';


const Stack = createStackNavigator();

const AuthRouters = () => {
  return (
    <Stack.Navigator 
        screenOptions={{headerShown: false}}
    >
        <Stack.Screen name="Onboarding" component={Onboarding} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
    </Stack.Navigator>
  );
}

export default AuthRouters;