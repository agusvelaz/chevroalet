import { Container, Stack, Flex, Text, Heading } from '@chakra-ui/react';
import ContactInfo from '../components/Contact/ContactInfo';

export default function Contact() {
  return (
    <>
      <Flex direction={'column'} alignItems="center" textAlign="center" my={10} as="section" id="Contact">
        <Flex
          fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}
        >
          <Heading  fontSize={{ base: "4xl", sm: "5xl" }}>CONTACTO</Heading>
        </Flex>
        <ContactInfo />
      </Flex>
    </>
  );
}
