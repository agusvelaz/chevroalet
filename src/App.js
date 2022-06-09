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

function App() {
  return (
    <ChakraProvider theme={theme}>
      <NavBar />
      <Header />
      <Box px={8} >
        <AboutUs />
        <Contact/>
      </Box>
      <Footer/>
    </ChakraProvider>
  );
}

export default App;
