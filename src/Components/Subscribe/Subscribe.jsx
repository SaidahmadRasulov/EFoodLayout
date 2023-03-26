import { Box, Container, Center, Button, Input, Text, Heading, Flex } from '@chakra-ui/react';
import React from 'react';
import {FaPaperPlane} from 'react-icons/fa';

function Subscribe() {

  const customBtn = {
    border: '1px solid #FF7A50',
    borderRadius: '25px',
  }

  return (
    <>
      <Box as='section' className='subscribe__section' p='2rem 0 4rem 0'>
        <Container maxW='1250px'>
          <Box className='subscribe__content' w='100%' h='400px' padding='3rem 1rem' bg='#FF7A50' borderRadius='10px' boxShadow='lg' color='white'>
            <Center>
              <Heading>Subscribe to get the Latest Offer</Heading>
            </Center>
            <Center mt='1.5rem'>
            <Text>Get our daily updates by subscribing to our newspaper, please drop your email below</Text>
            </Center>
            <Box w={['100%', '90%', '60%']} m='4rem auto 0 auto' pos='relative'>
            <Input type='text' borderRadius='25px' padding='1.5rem 1rem' outline='none' bg='white' color='black' _active={{outline: 'none'}} border='none' placeholder='Enter your email addres' />
            <Button pos={'absolute'} right='.3rem' top='.2rem' sx={customBtn} bg={'#FF7A50'} _hover={{bg: 'white', color: '#FF7A50'}}>
              <Flex gap='.5rem'>
              <FaPaperPlane />
              Subscribe
              </Flex>
            </Button>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  )
}

export default Subscribe