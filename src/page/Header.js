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
import chevy from '../components/Header/chevy1.jpg';
import { Logo } from '../components/Logo';
export default function Header() {
  return (
    <>
      <Flex
        maxW={'100%'}
        height={{base:"70vh", sm:'80vh'}}
        alignItems={'center'}
        justifyContent="center"
        bgImage={`linear-gradient(to bottom, rgb(0, 0, 0, 0), rgb(19, 19, 19)100%), url(${chevy})`}
        px={'20px'}
        as="section" id="Header"
      >
        <Box textAlign={'center'} py={36} color="brand.100" mt={"78px"}>
          <Text fontSize={{ base: '2xl', sm: '4xl' }} fontFamily={'heading'} textShadow={" 0px 1px 0px #000000"}>
            Repuestos & Accesorios
          </Text>
        
          <Heading fontSize={{ base: '5xl', sm: '8xl' }} textShadow={" 0px 1px 0px #000000"}>CHEVROALET</Heading>
          <Text
            color={'#fff'}
            fontSize={{ base: 'xl', sm: 'xl', md: '3xl' }}
            maxW={'800px'}
            my={8}
            // fontWeight={"bold"}
            textShadow={" 0px 1px 4px #000000"}
          >
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
              _hover={{ textDecoration: 'none' }}
            >
              <Button px={6}  variant={"brand"}>Productos publicados</Button>
            </Link>
          </Stack>
        </Box>
      </Flex>
      <MoreInfo />
    </>
  );
}
