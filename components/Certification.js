import React, { useState } from 'react'
import { useQuery, QueryClient, QueryClientProvider } from 'react-query'
import { Text, Box, FlatList, Center, Avatar, Heading } from 'native-base'

const queryClient = new QueryClient()

function CertificationFetch() {
    const [certifications, setCertifications] = useState([])

    const ipAddress = '' // SUBSTITUA PELO SEU ENDEREÇO IP

    const { error, isError, isLoading } = useQuery('academicFormation', () =>
        fetch(`http://${ipAddress}:8080/certifications`).then(res => res.json()).then(json => setCertifications(json))
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
            <FlatList data={certifications} keyExtractor={(item) => item.id} renderItem={({ item }) => (
                <Box>
                    <Text fontSize="lg">
                        <Text bold>{item.name}</Text>
                    </Text>
                    <Text fontSize="md">{item.organization} - {item.year}</Text>
                </Box>
            )}>

            </FlatList>
        </Center>
    )
}

export default function Certification() {
    return (
        <QueryClientProvider client={queryClient}>
            <CertificationFetch />
        </QueryClientProvider>
    )
}

