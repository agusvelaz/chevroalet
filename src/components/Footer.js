import {
  Box,
  chakra,
  Container,
  Link,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from '@chakra-ui/react';
import { FaInstagram, FaShoppingCart } from 'react-icons/fa';
import { Logo } from './Logo';

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      target="_blank"
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function SmallWithLogoLeft() {
  return (
    <Box>
      <Container
        as={Stack}
        maxW={'6xl'}
        py={4}
        direction={{ base: 'column', md: 'row' }}
        spacing={0}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}
      >
        <Logo w="140px" />
        <Text textAlign={"center"}>© Chevroalet SH. <Text color={'gray.500'}>by Agusvelaz - Alphadevs</Text></Text>
        
        <Stack direction={'row'} spacing={6}>
          <SocialButton
            label={'ShopML'}
            href="https://listado.mercadolibre.com.ar/_CustId_123669454"
          >
            <FaShoppingCart />
          </SocialButton>
          <SocialButton
            label={'Instagram'}
            href="https://www.instagram.com/chevroalet/"
          >
            <FaInstagram />
          </SocialButton>
        </Stack>
      </Container>
    </Box>
  );
}
