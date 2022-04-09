import React, { FC, useEffect, useState } from 'react';
import { Flex, Text, Image, Box } from "@chakra-ui/react"

interface PokeRocketProps {
    actualPokemon: any;
    actualRocket: any;
}

export const PokeRocket: FC<PokeRocketProps> = ({ actualPokemon, actualRocket }) => {
    const [capName, setCapName] = useState<string>(actualPokemon.name)
    const [capRocket, setCapRocket] = useState<string>(actualRocket.rocket_name)

    useEffect(() => {
        const { name } = actualPokemon;
        setCapName(name.charAt(0).toUpperCase() + name.slice(1));
        const { rocket_type } = actualRocket;
        setCapRocket(rocket_type.charAt(0).toUpperCase() + rocket_type.slice(1));
        console.log(actualRocket);
    }, [actualRocket, actualPokemon])

    return(
        <Flex w="80%" margin="auto" justifyContent="space-between" mb="4rem">
            <Flex
                w="27%"
                p="2rem" borderRadius="1rem"
                direction="column"
                justifyContent="space-around"
                alignItems="flex-start"
                boxShadow="md"
                bg="white"
                border="1px solid #E2E8F0"
            >
                <Box w="70%" margin="auto">
                    <Image src={actualPokemon.sprites.front_default} alt={actualPokemon.name} width="12rem" margin="auto"/>
                    <Text textStyle="paragraph"><b>Name:</b> {capName} </Text>
                    <Text textStyle="paragraph"><b>Weight (kg):</b> {actualPokemon.weight} </Text>
                    <Text textStyle="paragraph"><b>Height:</b> {actualPokemon.height} </Text>
                    <Text textStyle="paragraph"><b>Base experience:</b> {actualPokemon.base_experience} </Text>
                </Box>
            </Flex>
            <Flex
                w="35%"
                p="2rem"
                borderRadius="1rem"
                direction="column"
                justifyContent="space-around"
                alignItems="center"
                boxShadow="md"
                bg="white"
                border="1px solid #E2E8F0"
            >
                <Text textStyle="h3"><b>Rocket name: {actualRocket.rocket_name}</b></Text>
                <Box>
                    <Text textStyle="paragraph" fontSize="sm"><b>Country:</b> {actualRocket.country}</Text>
                    <Text textStyle="paragraph" fontSize="sm"><b>Type:</b> {capRocket}</Text>
                    <Text textStyle="paragraph" fontSize="sm"><b>Height (m):</b> {actualRocket.height.meters}</Text>
                    <Text textStyle="paragraph" fontSize="sm"><b>Description:</b> {actualRocket.description}</Text>
                </Box>
            </Flex>
            <Flex
                w="27%"
                borderRadius="1rem"
                boxShadow="md"
                border="1px solid #E2E8F0"
                bgImage={`url("${actualRocket.flickr_images[0]}")`}
                bgRepeat="no-repeat"
                bgPosition="bottom"
            />
        </Flex>
    )
}