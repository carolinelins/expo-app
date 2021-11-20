import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ImageBackground, StyleSheet, Text, View, SafeAreaView, TextInput, Button, Image } from 'react-native';
import { QueryClientProvider, QueryClient } from 'react-query'

import Cat from './components/Cat'

const backgroundImage = { uri: 'https://i.pinimg.com/564x/c4/07/eb/c407eb0e894f95737e5649624cd549fb.jpg' };

const queryClient = new QueryClient()

export default function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaView style={styles.container}>
        <ImageBackground source={backgroundImage} style={{ flex: 1 }}>
          <View style={styles.centerContentStyle}>
            <Text style={styles.titleStyle}>Facts about cats!</Text>
          </View>
          <View style={styles.centerContentStyle}>
            <Cat />
          </View>
          <StatusBar style="auto" />
        </ImageBackground>
      </SafeAreaView>
    </QueryClientProvider>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  },
  titleStyle: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 10
  },
  centerContentStyle: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 2,
    width: 250,
    alignSelf: 'center',
    backgroundColor: 'white'
  },
  circle: {
    width: 200,
    height: 200,
    borderRadius: 200 / 2,
    alignSelf: 'center',
    margin: 30,
    alignItems: 'center'
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 200 / 2,
  }
});
