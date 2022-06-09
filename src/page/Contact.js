import { Container, Stack, Flex, Text } from '@chakra-ui/react';
import ContactInfo from '../components/Contact/ContactInfo';

export default function Contact() {
  return (
    <>
      <Flex direction={'column'} alignItems="center" textAlign="center" my={10}>
        <Flex
          as={'h2'}
          direction={'column'}
          lineHeight={1.1}
          fontWeight={600}
          fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}
        >
          <Text as={'span'}>Contacto</Text>
          {/* <Text as={'span'} color={'brand.100'} my={5}>
            Chevroalet
          </Text> */}
        </Flex>
        <ContactInfo/>
      </Flex>
    </>
  );
}
