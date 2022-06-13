import theme from './theme/theme';
import {
  ChakraProvider,
  Box,
} from '@chakra-ui/react';

import NavBar from './components/NavBar';
import Header from './page/Header';
import AboutUs from './page/AboutUs';
import Contact from './page/Contact';
import Footer from './components/Footer'
import FindUs from './page/FindUs';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <NavBar />
      <Header />
      <Box px={8} >
        <AboutUs />
        <Contact/>
        <FindUs/>
      </Box>
      <Footer/>
      <WhatsAppButton/>
    </ChakraProvider>
  );
}

export default App;
