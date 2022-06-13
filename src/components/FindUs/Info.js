import { Flex, Heading, Text, Box } from '@chakra-ui/react';
import React from 'react';

export default function Info() {
  return (
    <Flex flexDirection={'column'} my={5} mx={{base:0, md:9}} w={{base:"100%", md:"40%"}} justify={"center"}>
      <Box
        borderColor={'dark.200'}
        px={10}
        py={10}
        borderRadius={'xl'}
        boxShadow={'rgb(0 0 0 / 90%) 0px 1px 5px 0px'}
        
      >
        <Heading>📍Direccion</Heading>
        <Text color={'gray.500'}>
          Avenida Doctor Ricardo Balbin 3317 Saavedra, Distrito Federal,
          Argentina
        </Text>
      </Box>
      <Box
        borderColor={'dark.200'}
        px={10}
        py={10}
        my={10}
        borderRadius={'xl'}
        boxShadow={'rgb(0 0 0 / 90%) 0px 1px 5px 0px'}
      >
        <Heading>⌚​Horarios</Heading>
        <Text color={'gray.500'}>Lunes a Viernes: de 8 a 18hs Sabados: de 8.30 a 13hs .</Text>
      </Box>
      <Box
        borderColor={'dark.200'}
        px={10}
        py={10}
        borderRadius={'xl'}
        boxShadow={'rgb(0 0 0 / 90%) 0px 1px 5px 0px'}
      >
        <Heading>🗺️​Indicaciones</Heading>
        <Text color={'gray.500'}>
          Estamos en el barrio de Saavedra, a 8 cuadras de la
          estación de tren Luis María Saavedra del Ferrocarril Mitre y a 20
          cuadras del Shopping Dot Baires.
        </Text>
      </Box>
    </Flex>
  );
}
