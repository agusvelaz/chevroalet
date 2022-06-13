import { Box, Heading, Flex } from '@chakra-ui/react';
import Map from '../components/FindUs/Map';
import Info from '../components/FindUs/Info';

export default function FindUs() {
  return (
    <Flex direction={'column'} alignItems="center" textAlign="center" my={10} as="section" id="FindUs">
      <Heading fontSize={{ base: '4xl', sm: '5xl' }}>ENCONTRANOS</Heading>
      <Flex direction={{base:"column-reverse", md:"row"}} py={100}>
        <Info/>
        <Map />
        </Flex>
    </Flex>
  );
}
