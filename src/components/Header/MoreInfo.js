import { ReactElement } from 'react';
import {
  Box,
  SimpleGrid,
  Icon,
  Text,
  Stack,
  Flex,
  Link,
} from '@chakra-ui/react';
import { FcAssistant, FcDonate, FcInTransit } from 'react-icons/fc';

const Feature = ({ title, text, icon, children }) => {
  return (
    <Flex
      direction={'column'}
      align={'center'}
      justify={'center'}
      textAlign="center"
      //   bg={"dark.200"}
      borderColor={'dark.200'}
    //   border={"1px solid"}
      p={5}
      borderRadius={'xl'}
      boxShadow={"rgb(0 0 0 / 90%) 0px 1px 5px 0px"}
    >
      <Flex
        w={16}
        h={16}
        align={'center'}
        justify={'center'}
        color={'white'}
        rounded={'full'}
        // bg={'gray.500'}
        mb={1}
        sx={{svg:{w:20, h:20}}}
      >
        {icon}
      </Flex>
      <Text fontWeight={600} fontSize="3xl">
        {title}
      </Text>
      <Text color={'gray.500'} fontSize="xl">
        {children}
      </Text>
    </Flex>
  );
};

export default function MoreInfo() {
  return (
    <Box py={100} px={10} maxW={'8xl'} m="auto">
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        <Feature
          icon={<Icon as={FcAssistant}  />}
          title={'Asesoramiento'}
        >
          Le explicamos y lo asesoramos en lo que necesite. Podes{' '}
          <Link to="/contacto">llamarnos </Link> o envíarnos tu consulta por{' '}
          <Link to="/contacto">whatsapp</Link>.
        </Feature>
        <Feature
          icon={<Icon as={FcDonate}  />}
          title={'Medios de pago'}
        >
          Aceptamos tarjeta , mercadopago o trasferencia bancaria. Pagando en
          efectivo te hacemos un 10% de descuento.
        </Feature>
        <Feature
          icon={<Icon as={FcInTransit}  />}
          title={'Envios'}
        >
          Hacemos envios a todo el pais. Tambien enviamos en el dia a CABA o
          GBA. <Link to="/contacto">Contactanos</Link> para coordinar.
        </Feature>
      </SimpleGrid>
    </Box>
  );
}
