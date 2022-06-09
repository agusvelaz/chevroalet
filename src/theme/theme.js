import { extendTheme } from "@chakra-ui/react"

// 2. Call `extendTheme` and pass your custom values
const theme = extendTheme({
    styles:{
        global:{
            body:{
                bg: "#121212",
                color:"#fff",
                fontFamily: 'body'
            }
        }
    },
  colors: {
    brand: {
      100: "#ffa600",
      // ...
      900: "#1a202c",
    },
    dark:{
        100:"#121212",
        200: "#282828"
      }
  },
})


export default theme;