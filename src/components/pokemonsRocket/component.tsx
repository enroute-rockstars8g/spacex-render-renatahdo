import React, { FC } from 'react';
import { Text, Box, Wrap, WrapItem, Flex } from "@chakra-ui/react"

interface RocketsProps {
    rockets: any[];
}

export const Rockets: FC<RocketsProps> = ({ rockets }) => {
    return(
        <Wrap w="80%" margin="auto" justify="space-between" mb="4rem">
            {rockets.map((singleRocket, index) => {
                return(
                <WrapItem w="30%" key={`rocket-${singleRocket.rocket_name}-index-${index}`}>
                    <Flex
                        height="45rem"
                        borderRadius="1rem"
                        direction="column"
                        justifyContent="flex-start"
                        alignItems="flex-start"
                        boxShadow="md"
                        bg="white"
                        border="1px solid #E2E8F0"
                        mb="3rem"
                    >
                        <Flex
                            w="100%"
                            borderRadius="1rem 1rem 0 0"
                            height="15rem"
                            bgImage={`url("${singleRocket.flickr_images[0]}")`}
                            bgRepeat="no-repeat"
                            bgPosition="center"
                        />
                        <Box p="2rem">
                            <Text textStyle="h3" fontSize="lg"><b>Rocket name: {singleRocket.rocket_name}</b></Text>
                            <Text textStyle="paragraph" fontSize="sm"><b>Country:</b> {singleRocket.country}</Text>
                            <Text textStyle="paragraph" fontSize="sm"><b>Type:</b> {singleRocket.rocket_type}</Text>
                            <Text textStyle="paragraph" fontSize="sm"><b>Height (m):</b> {singleRocket.height.meters}</Text>
                            <Text textStyle="paragraph" fontSize="sm"><b>Description:</b> {singleRocket.description}</Text>
                        </Box>
                    </Flex>
                </WrapItem>
            )})}
        </Wrap>
    )
}