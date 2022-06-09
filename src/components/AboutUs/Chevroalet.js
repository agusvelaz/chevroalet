import {
  Container,
  Stack,
  Flex,
  Text,
} from '@chakra-ui/react';

export default function Chevroalet() {
  return (
    <Container maxW={'7xl'}>
      <Stack
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        py={20}
        direction={{ base: 'column', md: 'row' }}
      >
        <Flex direction={'column'} alignItems="center" textAlign="center">
          <Flex
            as={'h2'}
            direction={"column"}
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}
          >
            <Text
              as={'span'}
            >
              ¿ Quienes somos ?
            </Text>
            <Text as={'span'} color={'brand.100'} my={5}>
              Chevroalet
            </Text>
          </Flex>
          <Text color={'gray.500'} fontSize="2xl">
            Una empresa con más de 15 años de experiencia y trayectoria.
            Contamos con repuestos y accesorios originales o alternativas de
            primera calidad, brindándote seguridad y confianza. Tenemos el mejor
            servicio y asesoramiento para vos y tu auto.
          </Text>
          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={{ base: 'column', sm: 'row' }}
          ></Stack>
        </Flex>
      </Stack>
    </Container>
  );
}
