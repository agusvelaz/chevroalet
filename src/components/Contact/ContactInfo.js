import {
  Box,
  SimpleGrid,
  Icon,
  Text,
  Stack,
  Flex,
  Link,
  Heading
} from '@chakra-ui/react';
import { FcAssistant, FcDonate, FcInTransit } from 'react-icons/fc';

const Feature = ({ title, text, icon, children }) => {
  return (
    <Flex
      direction={'column'}
      align={'center'}
      justify={'center'}
      textAlign="center"
      borderColor={'dark.200'}
      px={10}
      py={10}
      borderRadius={'xl'}
      boxShadow={'rgb(0 0 0 / 90%) 0px 1px 5px 0px'}
    >
      <Flex
        w={16}
        h={16}
        align={'center'}
        justify={'center'}
        color={'white'}
        rounded={'full'}
        mb={1}
        sx={{ svg: { w: 20, h: 20 } }}
      >
        {icon}
      </Flex>
      <Heading fontWeight={600} fontSize="3xl" my={3}>
        {title}
      </Heading>
      <Text color={'brand.100'} fontSize={{base:"2xl", sm:"3xl"}}>
        {children}
      </Text>
    </Flex>
  );
};

export default function ContactInfo() {
  return (
    <Box py={100} px={0} maxW={'8xl'} m="auto">
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        <Feature icon={<Icon as={FcAssistant} />} title={'Llamanos'}>
          4542-9075
        </Feature>
        <Feature icon={<Icon as={FcDonate} />} title={'Mail'}>
          chevroalet@hotmail.com
        </Feature>
        <Feature icon={<Icon as={FcInTransit} />} title={'WhatsApp'}>
          11 4051 3709
        </Feature>
      </SimpleGrid>
    </Box>
  );
}
