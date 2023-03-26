import React, { useContext, useState } from 'react';

import {Box, Container, Text, Heading, Flex, Image, Button} from '@chakra-ui/react';
import { Card, CardBody, CardHeader } from '@chakra-ui/react';
import {  BsArrowRightShort } from 'react-icons/bs';
import { IoTime } from 'react-icons/io5';
import { NavLink } from 'react-router-dom';
import { RestContext } from '../../Context/Context';

function Restaurants() {

    const [rest, setRest] = useContext(RestContext);

    const customBtn = {
        width: '50px',
        height: '25px',
        background: '#FF7A50',
        color: 'white',
        fontSize: '1.2rem',
        borderRadius: '20px 20px 0px 20px',
        border: '1px solid #FF7A50'

    }

    return (
        <>
            <Box as='section' className='restaurant__section' py='2rem'>
                <Container maxW='1100px'>
                    <Box className='restaurant__content'>
                        <Flex flexWrap='wrap' justify='center' gap='1.5rem'>
                            {rest.map((res) => (
                                <Card key={res.id} w={['90%', '45%', '30%']} borderRadius='45px 10px 0 0'>
                                    <CardHeader p='0'>
                                        <Image src={res.image} w='100%' />
                                    </CardHeader>
                                    <CardBody>
                                        <Text fontSize='1.5rem'>{res.name}</Text>
                                        <Flex align='center' gap='.5rem'>
                                            <IoTime color='gray' />
                                            {res.time}
                                            <NavLink to={`/restaurant/${res.id}`}>
                                            <Button sx={customBtn} _hover={{bg: 'white', color: '#FF7A50'}}>
                                                <BsArrowRightShort />
                                            </Button>
                                            </NavLink>
                                        </Flex>
                                    </CardBody>
                                </Card>
                            ))}
                        </Flex>
                    </Box>
                </Container>
            </Box>
        </>
    )
}

export default Restaurants