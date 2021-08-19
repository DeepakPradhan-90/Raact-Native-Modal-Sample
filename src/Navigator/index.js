import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Dashboard from '../Containers/Dashboard';
import Details from '../Containers/Details';

const Stack = createNativeStackNavigator();

const StackScreen = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name="Dashboard"
        component={Dashboard}
        options={{ title: 'My home' }}
      />
      <Stack.Screen
        name="Details"
        component={Details}
        options={{ title: 'My Details' }}
      />
    </Stack.Navigator>
  );
};

export default StackScreen;
