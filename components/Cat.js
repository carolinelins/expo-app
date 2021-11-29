import React from 'react'
import { useQuery, QueryClient, QueryClientProvider } from 'react-query'
import axios from 'axios'
import { StyleSheet, Text, Button, View, SafeAreaView, StatusBar, ImageBackground } from 'react-native'

const backgroundImage = { uri: 'https://i.pinimg.com/564x/c4/07/eb/c407eb0e894f95737e5649624cd549fb.jpg' };

const queryClient = new QueryClient()

async function fetchCat() {
    const data = await axios.get('https://cat-fact.herokuapp.com/facts/random?animal_type=cat')
    return data
}

function CatFetch() {
    const { data, error, isError, isLoading, refetch } = useQuery('cat', fetchCat)

    if (isLoading) {
        return <Text style={{ textAlign: 'center', fontSize: 20, margin: 5 }}>Loading...</Text>
    }
    if (isError) {
        return <Text style={{ textAlign: 'center', fontSize: 20, margin: 5 }}>Error! {error.message}</Text>
    }

    return (
        <View style={{ justifyContent: 'center', alignItems: 'center', marginVertical: 55, marginHorizontal: 40 }}>
            <Text style={{ textAlign: 'justify', fontSize: 20, margin: 10 }}>{data.data.text}</Text>
            <Button title="Another one!" onPress={() => refetch()} />
        </View>
    )
}

export default function Cat({ navigation }) {
    return (
        <QueryClientProvider client={queryClient}>
            <SafeAreaView style={styles.container}>
                <ImageBackground source={backgroundImage} style={{ flex: 1 }}>
                    <View style={styles.centerContentStyle}>
                        <Text style={styles.titleStyle}>Facts about cats!</Text>
                    </View>
                    <View style={styles.centerContentStyle}>
                        <CatFetch />
                    </View>
                    <Button title="Go to DOG FACTS" onPress={() => navigation.navigate('Dog')} />
                    <StatusBar style="auto" />
                </ImageBackground>
            </SafeAreaView>
        </QueryClientProvider>
    )
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
    }
})