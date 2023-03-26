import React, { useContext, useState } from 'react';
import { Box, Card, CardHeader, CardBody, CardFooter, Button } from '@chakra-ui/react';
import { Container, Flex, Heading } from '@chakra-ui/react'
import { Text, List, ListItem, Image } from '@chakra-ui/react';
import { CiPizza, CiBurger } from 'react-icons/ci';
import { AiFillStar } from 'react-icons/ai'
import { IoFastFood } from 'react-icons/io5';
import { GiHotMeal, GiMeal } from 'react-icons/gi';
import { FoodContext } from '../../Context/Context'

function Category() {

    const [menu, setMenu] = useState([
        { id: 1, ok: false, category: 'burger', icon: <CiBurger /> },
        { id: 2, ok: false, category: 'Pizza', icon: <CiPizza /> },
        { id: 3, ok: false, category: 'sandwich', icon: <IoFastFood /> },
        { id: 4, ok: false, category: 'Asian Food', icon: <GiHotMeal /> },
        { id: 5, ok: false, category: 'Set Menu', icon: <GiMeal /> },
    ]);

    const [meals, setMeals] = useContext(FoodContext)

    const handleSet = (id) => {
        menu.map((m) => {
            if (m.id === id) {
                m.ok = true
            } else {
                m.ok = false
            }
        })
    }


    return (
        <Box as='section' className='popular__section' py='3rem'>
            <Container maxW='1250px'>
                <Box className='popular__title'>
                    <Heading textAlign={'center'}>Our popular <span className='orange__span'>Category</span> </Heading>
                </Box>
                <Box className='popular__nav' py='2rem'>
                    <Flex justify='center' align='center' gap='2rem' flexWrap={['wrap', 'wrap', 'nowrap']}>
                        {menu.map((m) => (
                            <Flex key={m.id} align='center' gap='.5rem' p='1rem' boxShadow='lg' borderRadius='10px' bg={m.ok ? '#FF7A50' : 'white'} onClick={() => handleSet(m.id)}>
                                <Text fontSize='1.5rem' color={m.ok ? 'white' : 'black'}>{m.icon}</Text>
                                {m.category}
                            </Flex>
                        ))}
                    </Flex>
                    <Flex m='2rem 0' flexWrap={['wrap', 'wrap', 'nowrap']} justify='center' gap='2rem'>
                        {meals.map((meal) => (
                            <Card key={meal.id} w={['90%', '40%', '20%']}>
                                <CardHeader>
                                    <Image src={meal.meals.map((m) => m.image)} w='100%'  objectFit='cover' />
                                    <Flex justify='center' gap='.5rem' color='#FAC412'>
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                    </Flex>
                                </CardHeader>
                                <CardBody>
                                    <Text fontSize='.8rem' textAlign='center'>{meal.title}</Text>
                                    <Text textAlign='center' fontWeight='bold'>${meal.price}.00</Text>
                                </CardBody>
                                <CardFooter >
                                    <Button textAlign='center' m='0 auto' bg='#FF7A50' color='white' border='1px solid #FF7A50' _hover={{bg: 'white', color: '#FF7A50'}}>Add to Cart</Button>
                                </CardFooter>
                            </Card>
                        ))}
                    </Flex>
                </Box>
            </Container>
        </Box>
    )
}

export default Category