import React from 'react'
import { useQuery } from 'react-query'
import axios from 'axios'
import { StyleSheet, Text, Button, View } from 'react-native'

async function fetchCat() {
    const data = await axios.get('https://cat-fact.herokuapp.com/facts/random?animal_type=cat')
    return data
}

function Cat() {
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

const styles = StyleSheet.create({
    image: {
        width: 200,
        height: 200,
        borderRadius: 200 / 2,
    }
})

export default Cat