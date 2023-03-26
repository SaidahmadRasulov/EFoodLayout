import React from 'react';
import { Box, Container, Flex, Text, Heading, Image, ButtonGroup, Button } from '@chakra-ui/react';
import right from '../../assets/right.png'
import left from '../../assets/left.png'
import def from '../../assets/def.png';
import {BsApple} from 'react-icons/bs';
import {FaGooglePlay} from 'react-icons/fa';


function Download() {
  return (
    <>
        <Box as='section' className='download__section' py='4rem'>
            <Container maxW='1100px'>
                <Flex justify={'space-between'} align='center' direction={['column-reverse', 'column-reverse', 'row']}>
                    <Box className='download__title' w={['90%', '70%', '50%']}>
                        <Heading>Download  Our <span className='orange__span'>Mobile App</span></Heading>
                        <Text margin='1rem 0'>It's all at your fingertips -- the restaurants you love. Find the right food to suit your mood, and make the first bite last. Go ahead, download app and get 50% discount</Text>
                        <ButtonGroup>
                            <Button p='1.5rem 1rem' bg='black' color='white' _hover={{bg: 'white', color: 'black'}} boxShadow='md'>
                                <Flex align='center' gap='.5rem'>
                                    <BsApple />
                                    <Text>
                                        <span className='small__span'>Download on the</span>
                                        <br />
                                        <span>App Store</span>
                                    </Text>
                                </Flex>
                            </Button>
                            <Button p='1.5rem 1rem' bg='black' color='white' _hover={{bg: 'white', color: 'black'}} boxShadow='md'>
                                <Flex align='center' gap='.5rem'>
                                    <FaGooglePlay />
                                    <Text>
                                        <span className='small__span ttr'>get it in</span>
                                        <br />
                                        <span>Google Play</span>
                                    </Text>
                                </Flex>
                            </Button>
                        </ButtonGroup>
                    </Box>
                    <Box className='download__image' pos='relative'>
                        <Image src={left} pos='absolute' left={['-80px', '-120px', '-150px']} top='50px' height='80%' zIndex='-1' />
                        <Image src={def}  />
                        <Image src={right} pos='absolute' top='50px' right={['-80px', '-120px', '-150px']} h='80%' zIndex='-1' />
                    </Box>
                </Flex>
            </Container>
        </Box>
    </>
  )
}

export default Download