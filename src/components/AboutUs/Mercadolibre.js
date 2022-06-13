import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Image,
  Link
} from '@chakra-ui/react';
import Blob from './Blob';
import mercado from './mercado.png'

export default function Mercadolibre() {
  return (
    <Container maxW={'7xl'}>
      <Stack
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
        direction={{ base: 'column-reverse', md: 'row' }}
      >
        <Stack flex={1} spacing={{ base: 5, md: 10 }}>
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: "4xl", sm: "5xl" }}
          >
              Mercadolibre
          </Heading>
          <Text color={'gray.500'} fontSize={{ base: 'xl',  md: '2xl' }}>
            Somos MercadoLíder Platinum, esto nos cataloga como uno de los
            mejores vendedores del sitio, con mas de 10 años de experiencia en
            ventas online , brindamos una excelente experiencia. Todos los dias
            despachamos pedidos a todo el pais.
          </Text>
          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={{ base: 'column', sm: 'row' }}
          >
              <Link href="https://listado.mercadolibre.com.ar/_CustId_123669454" target={"_blank"}>
            <Button
              size={'lg'}
              px={6}
              // bg={"brand.100"}
              variant={"brand"}
              
            >
              Productos publicados
            </Button>
            </Link>
          </Stack>
        </Stack>
        <Flex
          flex={1}
          justify={'center'}
          align={'center'}
          position={'relative'}
          w={'full'}
        >
          <Blob
            w={'150%'}
            h={'150%'}
            position={'absolute'}
            top={'-20%'}
            left={0}
            zIndex={-1}
            color="brand.100"
          />
          <Box
            position={'relative'}
            height={'300px'}
            rounded={'2xl'}
            boxShadow={'2xl'}
            width={'full'}
            overflow={'hidden'}
          >
            <Image
              alt={'Hero Image'}
              fit={'cover'}
              align={'center'}
              w={'100%'}
              h={'100%'}
              src={mercado}
            />
          </Box>
        </Flex>
      </Stack>
    </Container>
  );
}
