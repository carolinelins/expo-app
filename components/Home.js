import React from 'react';
import { Heading, Stack, HStack, Pressable, Center, Text, Avatar } from 'native-base'

export default function Home({ navigation }) {
    return (
        <Center flex={1} px="3">
            <Avatar
                bg="amber.500"
                m={5}
                source={{
                    uri: "https://media-exp1.licdn.com/dms/image/C4E03AQGMIhRa5LHJag/profile-displayphoto-shrink_800_800/0/1572564835433?e=1644451200&v=beta&t=v8Cq1nrifzWNUUIzoaAfgIL6YGaY5ysa0PJLhh7etuE",
                }}
            >CL</Avatar>
            <Heading m={5}>Caroline Lins</Heading>
            <Stack m={5} space={3} alignItens="center">
                <HStack space={3} alignItems="center">
                    <Pressable onPress={() => navigation.navigate('Formação Acadêmica')}>
                        <Center h="20" w="110" bg="primary.500" rounded="md" shadow={3}>
                            <Text fontSize="lg" fontWeight="semibold">Formação acadêmica</Text>
                        </Center>
                    </Pressable>
                    <Pressable onPress={() => navigation.navigate('Certificados')}>
                        <Center h="20" w="110" bg="primary.500" rounded="md" shadow={3}>
                            <Text fontSize="lg" fontWeight="semibold">Certificados</Text>
                        </Center>
                    </Pressable>
                    <Pressable onPress={() => navigation.navigate('Hobbies')}>
                        <Center h="20" w="110" bg="primary.500" rounded="md" shadow={3}>
                            <Text fontSize="lg" fontWeight="semibold">Hobbies</Text>
                        </Center>
                    </Pressable>
                </HStack>
            </Stack>
        </Center>
    )
}