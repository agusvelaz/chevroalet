import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  Stack,
  Flex,
  Link,
} from '@chakra-ui/react';
import MoreInfo from '../components/Header/MoreInfo';
export default function Header() {
  return (
    <>
      <Flex
        maxW={'100%'}
        borderBottom={'1px solid red'}
        // height={'80vh'}
        alignItems={'center'}
        justifyContent="center"
      >
        <Box
          textAlign={'center'}
          py={36 }
          color="brand.100"
        >
          <Text as={'span'} fontSize={{ sm:"3xl",md: '4xl' }}>
            Repuestos & Accesorios
          </Text>
          <Heading fontSize={{ sm: '6xl', md: '8xl' }}>
            CHEVROALET
          </Heading>
          <Text color={'gray.500'} fontSize={{ base: '2xl', sm: 'xl', md: '3xl' }} maxW={'800px'} my={8}>
            Con más de 15 años de experiencia y trayectoria en la
            comercialización de repuestos y accesorios.
          </Text>
          <Stack
            direction={'column'}
            align={'center'}
            alignSelf={'center'}
            position={'relative'}
            color={'#000'}
            my={6}
          >
            <Link
              href="https://listado.mercadolibre.com.ar/_CustId_123669454"
              target={'_blank'}
            >
              <Button bg={'brand.100'} px={6}>
                Productos publicados
              </Button>
            </Link>
          </Stack>
        </Box>
      </Flex>
      <MoreInfo />
    </>
  );
}
