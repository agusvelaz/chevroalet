import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Image,
  Link,
} from '@chakra-ui/react';
import Blob from './Blob';
import insta from "./instagram.jpg"

export default function Seguinos() {
  return (
    <Container maxW={'7xl'}>
      <Stack
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
        direction={{ base: 'column', md: 'row' }}
      >
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
              src={insta}
            />
          </Box>
        </Flex>
        <Stack flex={1} spacing={{ base: 5, md: 10 }}>
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: "4xl", sm: "5xl" }}
          >
              Seguinos
          </Heading>
          <Text color={'gray.500'} fontSize={{ base: 'xl',  md: '2xl' }}>
            Si queres ver más contenido sobre nosotros y acceder a promociones
            exclusivas podés seguirnos en nuestras redes.
          </Text>
          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={{ base: 'column', sm: 'row' }}
          >
            <Link
              href="https://www.instagram.com/chevroalet/"
              target={'_blank'}
            >
              <Button size={'lg'} px={6}  variant={"brand"}>
                Instagram
              </Button>
            </Link>
          </Stack>
        </Stack>
      </Stack>
    </Container>
  );
}
