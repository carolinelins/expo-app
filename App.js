import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Cat from './components/Cat'
import Dog from './components/Dog'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="CAT FACTS" component={Cat} />
        <Stack.Screen name="DOG FACTS" component={Dog} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
