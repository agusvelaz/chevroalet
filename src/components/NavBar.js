import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { Logo } from './Logo';

const Links = [
  // { name: 'Home', href: 'Header' },
  { name: 'Quienes somos', href: 'AboutUs' },
  { name: 'Contacto', href: 'Contact' },
  { name: 'Encontranos', href: 'FindUs' },
];

const NavLink = ({ page }) => (
  // const {href, name} = page
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={`#${page.href}`}
  >
    {page.name}
  </Link>
);

export default function NavBar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box px={8} position={"fixed"} w="100%" bg={"dark.100"} zIndex={99}>
        <Flex
          h={16}
          alignItems={'center'}
          justifyContent={'space-between'}
          maxW={'6xl'}
          m="auto"
        >
          <Logo />
          <HStack spacing={8} alignItems={'center'}>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}
            >
              {Links.map(link => (
                <NavLink key={link} page={link}></NavLink>
              ))}
            </HStack>
          </HStack>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
            color={'#fff'}
            bg={'dark.200'}
          />
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map(link => (
                <NavLink key={link} page={link}></NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
