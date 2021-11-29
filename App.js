import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Cat from './components/Cat'
import Dog from './components/Dog'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerStyle: {
          backgroundColor: '#f7b1b1',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        }
      }}>
        <Stack.Screen name="Cat" component={Cat} options={{ title: 'CAT FACTS' }} />
        <Stack.Screen name="Dog" component={Dog} options={{ title: 'DOG FACTS' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
