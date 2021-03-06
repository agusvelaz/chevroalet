import React from 'react';
import { Image, Box, Link } from '@chakra-ui/react';

import logo from './logo.png';

export const Logo = ({w}) => {
  // return <Box {...props}>Chevroalet</Box>;
  return (
    <Box
      position={'relative'}
      // height={'300px'}
      width={w}
      overflow={'hidden'}
    >
      <Link href={`#Header`}>
        <Image
          alt={'Hero Image'}
          fit={'cover'}
          align={'center'}
          w={'100%'}
          h={'100%'}
          src={logo}
        />
      </Link>
    </Box>
  );
};
