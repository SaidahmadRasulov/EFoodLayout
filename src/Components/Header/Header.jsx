import React, { useRef } from 'react'
import { NavLink, Outlet } from 'react-router-dom';
import { Box, List, ListItem, Button, Container } from '@chakra-ui/react';
import { Heading, Text, Flex } from '@chakra-ui/react';
import { easeOut, motion } from 'framer-motion';
import { BsSearch, BsCart, BsList } from 'react-icons/bs';
import Footer from '../Footer'

function Header() {

    const btnStyle = {
        width: '100px',
        height: '40px',
        boxShadow: '0px 22px 40px rgba(255, 104, 56, 0.19)',
        background: '#FF7A50',
        color: 'white',
        border: '1px solid #FF7A50'
    }

    const listRef = useRef();

    const ToggleVisible = () => {
        listRef.current.classList.toggle('visible')
    }

    const headerRef = useRef();

    window.addEventListener('scroll', () => {
        if(window.scrollY > 0) {
            headerRef.current.classList.add('fixed')
        } else {
            headerRef.current.classList.remove('fixed')
        }
    })

    return (
        <>
            <Box as='header' py='1rem' ref={headerRef}>
                <Container maxW='1100px' >
                    <Box as='nav' className='navbar'>
                        <Flex align='center' justify='space-between'>
                            <Box className='navbar__logo' overflow='hidden'>
                                <motion.div initial={{ x: -500 }} animate={{ x: 0 }}>
                                    <Heading>
                                        <Flex>
                                            <Text color={'#FF6838'}>E</Text>
                                            <Text color={'#363853'}>Food</Text>
                                        </Flex>
                                    </Heading>
                                </motion.div>
                            </Box>
                            <Box className='navbar__links' overflow='hidden' display={['none', 'none', 'block']}>
                                <motion.div initial={{ x: 500 }} animate={{ x: 0 }}>
                                    <List>
                                        <Flex gap='3rem' align='center'>
                                            <NavLink to='/' className={(isActive) => isActive.isActive ? 'link__active' : 'link__item'}>
                                                <ListItem>Home</ListItem>
                                            </NavLink>
                                            <NavLink to='/service' className={(isActive) => isActive.isActive ? 'link__active' : 'link__item'}>
                                                <ListItem>Service</ListItem>
                                            </NavLink>
                                            <NavLink to='/city' className={(isActive) => isActive.isActive ? 'link__active' : 'link__item'}>
                                                <ListItem>Top cities</ListItem>
                                            </NavLink>
                                            <NavLink to='/contact' className={(isActive) => isActive.isActive ? 'link__active' : 'link__item'}>
                                                <ListItem>Contact</ListItem>
                                            </NavLink>
                                            <ListItem _hover={{cursor: 'pointer'}}>
                                                <BsSearch />
                                            </ListItem>
                                            <ListItem _hover={{cursor: 'pointer'}}>
                                                <BsCart />
                                            </ListItem>
                                            <ListItem>
                                                <Button sx={btnStyle} _hover={{ background: 'white', color: '#FF7A50' }} boxShadow='md'>Sign Up</Button>
                                            </ListItem>
                                        </Flex>
                                    </List>
                                </motion.div>
                            </Box>
                            <Box className='gamburger' display={['block', 'block', 'none']}>
                                <motion.div initial={{ x: 500 }} animate={{ x: 0 }}>
                                    <Box position='relative' onClick={() => ToggleVisible()}>
                                        <BsList fontSize='1.5rem' />
                                        <List ref={listRef} className='hide' pos='absolute' zIndex='100' top='2.5rem' right='0' bg='white' boxShadow='md' p='2rem' borderRadius='10px'>
                                            <Flex gap='1rem' direction={'column'}> 
                                                <NavLink to='/' className={(isActive) => isActive.isActive ? 'link__active' : 'link__item'}>
                                                    <ListItem>Home</ListItem>
                                                </NavLink>
                                                <NavLink to='/service' className={(isActive) => isActive.isActive ? 'link__active' : 'link__item'}>
                                                    <ListItem>Service</ListItem>
                                                </NavLink>
                                                <NavLink to='/city' className={(isActive) => isActive.isActive ? 'link__active' : 'link__item'}>
                                                    <ListItem>Top cities</ListItem>
                                                </NavLink>
                                                <NavLink to='/contact' className={(isActive) => isActive.isActive ? 'link__active' : 'link__item'}>
                                                    <ListItem>Contract</ListItem>
                                                </NavLink>
                                                <ListItem>
                                                    <BsSearch />
                                                </ListItem>
                                                <ListItem>
                                                    <BsCart />
                                                </ListItem>
                                                <ListItem>
                                                    <Button sx={btnStyle} _hover={{ background: 'white', color: '#FF7A50' }} boxShadow='md'>Sign Up</Button>
                                                </ListItem>
                                            </Flex>
                                        </List>
                                    </Box>
                                </motion.div>
                            </Box>
                        </Flex>
                    </Box>
                </Container>
            </Box>
            <Outlet />
            <Footer />
        </>
    )
}

export default Header