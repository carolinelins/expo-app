import React from 'react';
import { NativeBaseProvider, Center, Avatar, Heading } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './components/Home'
import AcademicFormation from './components/AcademicFormation'
import Certification from './components/Certification';
import Hobby from './components/Hobby';

const Stacke = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <NativeBaseProvider>

        <Stacke.Navigator initialRouteName='Currículo'>
          <Stacke.Screen name="Currículo" component={Home} />
          <Stacke.Screen name="Formação Acadêmica" component={AcademicFormation} />
          <Stacke.Screen name="Certificados" component={Certification} />
          <Stacke.Screen name="Hobbies" component={Hobby} />
        </Stacke.Navigator>

      </NativeBaseProvider>
    </NavigationContainer>
  );
}