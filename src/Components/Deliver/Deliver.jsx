import React from 'react';
import { Box, Container, Text, Heading, Image, Button } from '@chakra-ui/react';
import { Flex } from '@chakra-ui/react';
import deliver from '../../assets/deliv.png';
import { BiTimer } from 'react-icons/bi';
import { TbBike } from 'react-icons/tb';
import { BsShop } from 'react-icons/bs';

function Deliver() {

  return (
    <>
        <Box as='section' className='deliver__section' py='3rem'>
            <Container maxW='1100px'>
                <Flex className='deliver__content' justify='space-between' direction={['column', 'column', 'row']}>
                    <Box className='deliver__image' w={['90%', '70%', '40%']} m={['0 auto', '0 auto', 'none', 'none']}>
                        <Image src={deliver} w='100%' />
                    </Box>
                    <Box className='deliver__text' w={['90%', '70%', '40%']}>
                        <Heading color='' textTransform='capitalize'><span className='orange__span'>Stay</span> at home, we will Provide <span className='orange__span'>good food</span></Heading>
                        <Text w='70%' m='2rem 0'>We provide tasty food and superfast delivery at your home.  Let’s use our services right now and get discounts of up to 50%.</Text>
                        <Flex direction='column' gap='2rem'>
                            <Flex align='center' gap='.5rem' fontSize='1.2rem'>
                                <BiTimer fontSize='1.6rem' color='#FF7D3D' />
                                fasted delivery in 30 Minutes
                            </Flex>
                            <Flex align='center' gap='.5rem' fontSize='1.2rem'>
                                <TbBike fontSize='1.6rem' color='#47C2FF' />
                                300+ delivery men
                            </Flex>
                            <Flex align='center' gap='.5rem' fontSize='1.2rem'>
                                <BsShop fontSize='1.6rem' color='#FF5050' />
                                300+ delivery men
                            </Flex>
                            <Button bg='#FF7A50' borderRadius='20px 20px 0 20px' w='30%' color='white' _hover={{bg: 'white', color: '#FF7A50'}} border='1px solid #FF7A50'>See more</Button>
                        </Flex>
                    </Box>
                </Flex>
            </Container>
        </Box>
    </>
  )
}

export default Deliver