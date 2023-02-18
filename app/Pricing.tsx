import { Box, Button, Center, Flex, Heading, HStack, Icon, Text } from '@chakra-ui/react'
import React from 'react'
import Checkmark from './Icons/Checkmark'

export default function Pricing() {
  return (
    <Box bg='white' alignItems={'center'} maxW='1050px' mx={{base:'20px',md:'20px',lg:'auto'}} mt='-140px' borderRadius='16px' overflow='hidden' boxShadow='0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)'>
     <Flex direction={{base:'column', md:'column', lg:'row'}}> 
         <Box bg={'#ebe0ff'} pt='59px' textAlign={'center'} p='60px'>
            <Text fontWeight='800' fontSize='24px'>Premium PRO</Text>
            <Heading fontWeight='800' fontSize='60px'>$329</Heading>
            <Text fontWeight='500' fontSize='18px'>billed just once</Text>
            <Center><Button bg={'#805AD5'} color='white' w='282px' mt='24px' mx='auto'>Get Started</Button></Center>
         </Box>
         <Box p='40px'>
            <Text fontWeight='400' fontSize='18px' mb='24px'>Access these features when you get this pricing package for your business.</Text>   
            <HStack mb='16px'>
                <Icon as={Checkmark}/>
                <Text>International calling and messaging API</Text>
            </HStack>

            <HStack mb='16px'>
                <Icon as={Checkmark}/>
                <Text>Additional phone numbers</Text>
            </HStack>

            <HStack mb='16px'>
                <Icon as={Checkmark}/>
                <Text>Automated messages via Zapier</Text>
            </HStack>

            <HStack mb='16px'>
                <Icon as={Checkmark}/>
                <Text>24/7 support and consulting</Text>
            </HStack>
         </Box>    
        </Flex>
    </Box>
  )
}
