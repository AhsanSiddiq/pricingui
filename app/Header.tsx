import { Box, Heading, Text } from '@chakra-ui/react'
import React from 'react'

export default function Header() {
  return (
    <>
    <Box color='#F7FAFC' bg='#6B46C1' textAlign={{base:'left', md:'center', lg:'center'}} height='397px' maxW='1440px' pt={{base:"60px",md:"88px",lg:'90px'}}  pb='198px' pl={{base:"25px",md:"25px"}} pr={{base:"25px",md:"25px"}}>
        <Heading fontWeight='800' fontSize={{base:'30px',md:'48px',lg:'48px'}}>Simple pricing for your business</Heading>
        <Text fontWeight='500' fontSize={{base:'18px',md:'24px',lg:'24px'}} pt='16.08px' mb='1116.08px'>Plans that are carefully crafted to suit your business.</Text>      
    </Box>
    </>
  )
}
