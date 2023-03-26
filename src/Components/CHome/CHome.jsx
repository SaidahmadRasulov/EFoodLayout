import React from 'react';
import { Box, ButtonGroup, Container, Heading, Image } from '@chakra-ui/react';
import { Button, Text, Flex, } from '@chakra-ui/react';
import homeImg from '../../assets/homeImg.png'
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion'

function CHome() {

  const btnStyle = {
    width: '150px',
    height: '40px',
    boxShadow: '0px 22px 40px rgba(255, 104, 56, 0.19)',
    background: '#FF7A50',
    color: 'white',
    border: '1px solid #FF7A50'
  }

  return (
    <Box as='section' p='3rem 0' h={['auto', 'auto', '90vh']}>
      <Container maxW='1100px'>
        <Box className='home__content'>
          <Flex justify='space-between' align={['center']} direction={['column-reverse', 'column-reverse', 'row']} overflow='hidden'>
            <motion.div initial={{ x: -500 }} animate={{ x: 0 }} transition={{ ease: 'easeOut', duration: .5 }}>
              <Box className="home__title" w={['90%', '75%', '55%']}>
                <Heading fontWeight='500' fontSize={['2.5rem', '3rem', '3rem']} textTransform='capitalize' color={'#363853'}>super fast <span className='orange__span'>Food delivery</span> service</Heading>
                <Text margin='2rem 0'>We provide super fast-delivery service. Let’s use our services right now and get discounts of up to 50%</Text>
                <Flex align={['flex-start', 'flex-start', 'center']} gap='.5rem' direction={['column', 'column', 'row']}>
                  <Button sx={btnStyle} _hover={{ bg: 'white', color: '#FF7A50' }}>Explore Food</Button>
                  <NavLink to='' target='_blank'>
                    Download App
                  </NavLink>
                </Flex>
              </Box>
            </motion.div>
              <Box className="home__image" w={['80%', '75%', '45%']}>
            <motion.div initial={{ x: 500 }} animate={{ x: 0 }} transition={{ ease: 'easeOut', duration: .5 }}>
                <Image src={homeImg} alt="" />
            </motion.div>
              </Box>
          </Flex>
        </Box>
      </Container>
    </Box>
  )
}

export default CHome