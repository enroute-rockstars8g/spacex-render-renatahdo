import React, { useState, useEffect } from "react"
import { Flex, Text, Image, Input, Button } from "@chakra-ui/react"
import { PokeRocket } from './components/pokeRocket/component';
import { getPokemons, getPokemonById } from "./services/pokemon/servicePokemon";
import { getRockets, getRocketById, getRocketIdByPokemon } from "./services/spaceX/serviceSpaceX";


export const App = () => {
  const [pokemonName, setPokemonName] = useState<string>("")
  const [actualPokemon, setActualPokemon] = useState<any>(undefined)
  const [actualRocket, setActualRocket] = useState<any>(undefined)

  const getPokemonId = (event: React.ChangeEvent<HTMLInputElement>) => {
      if (event.target.value !== "") setPokemonName(event.target.value);
      else setPokemonName("");
  };

  const fetchPokemonRocket = async () => {
      const newPokemon = await getPokemonById(pokemonName);
      const rocketId = getRocketIdByPokemon(newPokemon);
      const newRocket = await getRocketById(rocketId);
      setActualPokemon(newPokemon);
      setActualRocket(newRocket);
  };
  
  return(
  <Flex fontSize="xl" bg="gray.200" direction="column">
    <Flex
      w="80%"
      direction="column"
      justifyContent="center"
      alignItems="center"
      margin="4.5rem auto"
      p="2rem"
      borderRadius="1rem"
      boxShadow="md"
      bg="white"
      border="1px solid #E2E8F0"
    >
      <Image src='/logo.svg' alt='Logo PokeX' width="20rem" my="2rem" />
      <Text textStyle="h1" py="1rem">
        Welcome to PokeX, know which rocket from SpaceX your favorite Pokemon rides!
      </Text>
      <Flex alignItems="center" justifyContent="center" py="1rem">
        <Text textStyle="paragraph">Who's your favorite Pokemon?</Text>
        <Input w="20%" type="text" m="0 3rem 0 2rem" variant='flushed' borderColor="teal.600" onChange={getPokemonId}/>
        <Button size="lg" variant="teal" onClick={fetchPokemonRocket}>Search</Button>
        <Button size="lg" variant="gray" ml="7rem" onClick={fetchPokemonRocket}>See list</Button>
      </Flex>
    </Flex>

    { (actualPokemon !== undefined && actualRocket !== undefined) ? (
      <PokeRocket actualPokemon={actualPokemon} actualRocket={actualRocket} />
    ) : null}
  </Flex>
)}
