import React from 'react';
import { Box, Container, Text, Flex, List, ListItem, Heading } from '@chakra-ui/react';
import { GoLocation } from 'react-icons/go';
import { FiPhoneCall, FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';
import { TbBrandPicsart } from 'react-icons/tb'
import { MdEmail } from 'react-icons/md'

function Footer() {
    return (
        <>
            <Box as='section' className='footer' py='2rem'>
                <Container maxW='1200px'>
                    <Flex align={['flex-start', 'flex-start', 'center']} justify='space-between' direction={['column', 'column', 'row']} gap='2rem'>
                        <Box className='footer__logo'>
                            <Heading color='#37383D'><span className='orange__span'>E</span>Food</Heading>
                            <List m='1rem 0'>
                                <ListItem>
                                    <Flex align='center' gap='.5rem'>
                                        <GoLocation />
                                        Dhaka, Bangladesh
                                    </Flex>
                                </ListItem>
                                <ListItem>
                                    <Flex align='center' gap='.5rem'>
                                        <FiPhoneCall />
                                        0943833399
                                    </Flex>
                                </ListItem>
                                <ListItem>
                                    <Flex align='center' gap='.5rem'>
                                        <MdEmail />
                                        support@efood.com
                                    </Flex>
                                </ListItem>
                            </List>
                            <Flex align='center'>
                                <List>
                                    <Flex align='center' gap='.5rem'>
                                        <ListItem w='30px' h='30px' display='flex' alignItems='center' bg='gray' justifyContent='center' borderRadius='50%' color='white'>
                                            <FiFacebook />
                                        </ListItem>
                                        <ListItem w='30px' h='30px' display='flex' alignItems='center' bg='gray' justifyContent='center' borderRadius='50%' color='white'>
                                            <FiTwitter />
                                        </ListItem >
                                        <ListItem w='30px' h='30px' display='flex' alignItems='center' bg='gray' justifyContent='center' borderRadius='50%' color='white'>
                                            <FiInstagram />
                                        </ListItem>
                                        <ListItem w='30px' h='30px' display='flex' alignItems='center' bg='gray' justifyContent='center' borderRadius='50%' color='white'>
                                            <TbBrandPicsart />
                                        </ListItem>
                                    </Flex>
                                </List>
                            </Flex>
                        </Box>
                        <List>
                            <ListItem fontSize='1.2rem' fontWeight='bold'>Service</ListItem>
                            <ListItem>How it works</ListItem>
                            <ListItem>Home delivery</ListItem>
                            <ListItem>Products</ListItem>
                            <ListItem>Menu</ListItem>
                        </List>
                        <List>
                            <ListItem fontSize='1.2rem' fontWeight='bold'>Company</ListItem>
                            <ListItem>About Us</ListItem>
                            <ListItem>News</ListItem>
                            <ListItem>Our trusted partner</ListItem>
                            <ListItem>New users FAQ</ListItem>
                        </List>
                        <List>
                            <ListItem fontSize='1.2rem' fontWeight='bold'>Supports</ListItem>
                            <ListItem>Help center</ListItem>
                            <ListItem>Feedback</ListItem>
                            <ListItem>Contact us</ListItem>
                            <ListItem>Terms conditions</ListItem>
                        </List>
                        <List>
                            <ListItem fontSize='1.2rem' fontWeight='bold'>Resources</ListItem>
                            <ListItem>Download app</ListItem>
                            <ListItem>Blog</ListItem>
                            <ListItem>What’s new</ListItem>
                            <ListItem>Sitemap</ListItem>
                        </List>
                    </Flex>
                </Container>
                <Box h='3px' w='100%' bg='gray.300' mt='2rem'></Box>
                <Box maxW='1200px' m='1rem auto 0 auto'>
                    <Flex align='center' justify='space-between' direction={['column', 'column', 'row']}>
                    <Text>© 2021 EFood - All rights reserved.</Text>
                    <List>
                        <Flex align='center' gap='1rem'>
                        <ListItem>
                            Privacy
                        </ListItem>
                        <ListItem>
                            Security
                        </ListItem>
                        <ListItem>
                            Terms
                        </ListItem>
                        </Flex>
                    </List>
                    </Flex>
                </Box>
            </Box>
        </>
    )
}

export default Footer