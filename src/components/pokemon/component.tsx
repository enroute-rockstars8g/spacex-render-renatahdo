import React, { FC } from 'react';
import { Box, Text, Flex } from "@chakra-ui/react"

interface PokemonDisplayProps {
    actualPokemon: any;
}

export const PokemonDisplay: FC<PokemonDisplayProps> = ({ actualPokemon }) => {
    return(
        <Flex
            w="70%"
            direction="column"
            margin="4rem auto"
            p="2rem" borderRadius="1rem"
            boxShadow="md"
            bg="white"
            border="1px solid #E2E8F0"
            justifyContent="center"
            alignItems="center"
        >
            <Text> Nombre: {actualPokemon.name} </Text>
            <Text> Peso: {actualPokemon.weight} </Text>
            <Text> Altura: {actualPokemon.height} </Text>
            <Text> Experiencia base: {actualPokemon.base_experience} </Text>
            <Text> Índices en los juegos: </Text>
        </Flex>
    )
}