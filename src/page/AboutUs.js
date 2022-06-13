import Chevroalet from "../components/AboutUs/Chevroalet"
import { Box } from "@chakra-ui/react"
import Mercadolibre from "../components/AboutUs/Mercadolibre"
import  Seguinos  from "../components/AboutUs/Seguinos"

export default function AboutUs() {
  return (
    <Box as="section" id="AboutUs"  >
    <Chevroalet/>
    <Mercadolibre/>
    <Seguinos/>
    </Box>
  )
}
