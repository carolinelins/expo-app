import React, { useState, useEffect } from 'react'
import { useQuery, QueryClient, QueryClientProvider } from 'react-query'
import { Text, Box, FlatList, Center, Avatar, Heading } from 'native-base'

const queryClient = new QueryClient()

function AcademicFormationFetch() {
    const [academicFormations, setAcademicFormations] = useState([])

    const ipAddress = '' // SUBSTITUA PELO SEU ENDEREÇO IP

    const { error, isError, isLoading } = useQuery('academicFormation', () =>
        fetch(`http://${ipAddress}:8080/academic-formations`).then(res => res.json()).then(json => setAcademicFormations(json))
    )

    if (isLoading) {
        return <Text>Loading...</Text>
    }
    if (isError) {
        return <Text>Error! {error.message}</Text>
    }

    return (
        <Center flex={1} px="3">
            <Avatar
                bg="amber.500"
                m={5}
                source={{
                    uri: "https://media-exp1.licdn.com/dms/image/C4E03AQGMIhRa5LHJag/profile-displayphoto-shrink_800_800/0/1572564835433?e=1644451200&v=beta&t=v8Cq1nrifzWNUUIzoaAfgIL6YGaY5ysa0PJLhh7etuE",
                }}
            >CL</Avatar>
            <Heading m={5} fontSize="3xl">Caroline Lins</Heading>
            <FlatList data={academicFormations} keyExtractor={(item) => item.id} renderItem={({ item }) => (
                <Box>
                    <Text fontSize="lg">
                        <Text bold>{item.course}</Text><Text italic> ({item.degree})</Text>
                    </Text>
                    <Text fontSize="md">{item.institution} - de {item.startYear} a {item.endYear}</Text>
                </Box>
            )}>

            </FlatList>
        </Center>
    )
}

export default function AcademicFormation() {
    return (
        <QueryClientProvider client={queryClient}>
            <AcademicFormationFetch />
        </QueryClientProvider>
    )
}

