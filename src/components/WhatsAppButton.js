import { Box } from "@chakra-ui/react";
import {FaWhatsapp}  from "react-icons/fa";
import { Icon } from '@chakra-ui/react';

const whatsAppButton = {
  zIndex: 80,
  position: 'fixed',
  width: '55px',
  height: '55px',
  bottom: '30px',
  right: '20px',
  backgroundColor: '#25d366',
  color: '#FFF',
  borderRadius: '50px',
  textAlign: 'center',
  fontSize: '30px',
  boxShadow: '2px 2px 3px #999',
  display: 'flex',
  alignContent: 'stretch',
  justifyContent: 'space-around',
  alignItems: 'center',
  textDecoration: 'none',
  ':hover': {
    backgroundColor: '#FFF',
    transition: '0.5s',
    svg: {
      color: '#25d366',
    },
  },
  a: {
    display: 'flex',
  },
  svg: {
    color: '#fff',
    fontSize: 35,
  },
};
export default function WhatsAppButton() {
  return (
    <Box 
    sx={whatsAppButton}
    >
      <a href="https://wa.me/5491140513709" target="_blank">
        <Icon as={FaWhatsapp} />
      </a>
    </Box>
  );
}
