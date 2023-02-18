import { Box, Icon, HStack, Text, Flex } from '@chakra-ui/react'
import React from 'react'
import freeIcon from './Icons/freeIcon'
import guaranteeIcon from './Icons/guaranteeIcon'
import monthlyIcon from './Icons/monthlyIcon'

export default function Features() {
  return (
    <Box maxW='800px' mx='auto' mt='47px' mb='50px' pl={{base:'30px'}}>
        <Flex direction={{base:'column', md:'row', lg:'row'}}>
        <Box color='#171923' pb='20px'>
        <HStack>
            <Icon as={guaranteeIcon}/>
            <Text fontSize='18px' fontWeight='700' lineHeight='24px'>30 days money back Guarantee</Text>
        </HStack>
        </Box>

        <Box color='#171923' pb='20px'>
        <HStack>
            <Icon as={freeIcon}/>
            <Text fontSize='18px' fontWeight='700' lineHeight='24px'>No setup fees
100% hassle-free</Text>
        </HStack>
        </Box>

        <Box color='#171923' pb='20px'>
        <HStack>
            <Icon as={monthlyIcon}/>
            <Text fontSize='18px' fontWeight='700' lineHeight='24px'>30 days money back Guarantee</Text>
        </HStack>
        </Box>
        </Flex>
    </Box>
  )
}
