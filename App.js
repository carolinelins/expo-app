import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ImageBackground, StyleSheet, Text, View, SafeAreaView, TextInput, Button, Image } from 'react-native';

const backgroundImage = { uri: 'https://i.pinimg.com/originals/55/b7/e1/55b7e11b3ed5605f979ba991a5523b62.jpg' };
const dogPicture = { uri: 'https://www.petlove.com.br/images/breeds/193223/profile/original/golden_retriever-p.jpg?1532539102' };

export default function App() {
  const [name, setName] = React.useState('Marley')
  const [nameInput, setNameInput] = React.useState('')

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={backgroundImage} style={{ flex: 1 }}>
        <View style={styles.centerContentStyle}>
          <Text style={styles.titleStyle}>{name}</Text>
        </View>
        <View style={styles.circle}>
          <Image style={styles.image} source={dogPicture} />
        </View>
        <View style={styles.centerContentStyle}>
          <Text style={{ textAlign: 'center', fontSize: 20, margin: 5 }}>Altere o nome do cachorro:</Text>
          <TextInput style={styles.input} value={nameInput} onChangeText={nameInput => setNameInput(nameInput)} textAlign={'center'} />
          <Button title="Confirmar" onPress={() => setName(nameInput)} />
        </View>
        <StatusBar style="auto" />
      </ImageBackground>
    </SafeAreaView>
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
    alignItems: 'center',
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
