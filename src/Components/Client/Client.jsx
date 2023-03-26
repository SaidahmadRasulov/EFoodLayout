import React, { useState } from 'react';
import {Box, Button, ButtonGroup, Center, Container, Flex, Text} from '@chakra-ui/react';
import { Heading, Image } from '@chakra-ui/react';
import opaxon from '../../assets/opaxon.png';
import {BsArrowLeft, BsArrowRight} from 'react-icons/bs';

function Client() {

    const [check, setCheck] = useState(false);

  return (
    <>
        <Box as='section' className='client__section' py='3rem'>
            <Container maxW='1100px'>
                <Center>
                    <Heading>What Our Client Are <span className='orange__span'> Saying </span></Heading>
                </Center>
                <Box className='client__content' py='2rem'>
                    <Flex justify='space-between' align='center' direction={['column', 'column', 'row']}>
                        <Box className='client__img' w={['100%', '90%', '45%']}>
                            <Image src={opaxon} />
                        </Box>
                        <Box className='client__title' w={['100%', '90%', '45%']}>
                            <Text>{
                                check
                                ? 'EFood has the most intriguing food order system in the country. UI in both their app and web Is very simple and easy to use, enhancing the UX. Their delivery men are also quite professional and knows the neighborhood well. Till now I never had to guide them to my address for delivery; EFood has the most intriguing food order system in the country. UI in both their app and web Is very simple and easy to use, enhancing the UX. Their delivery men are also quite professional and knows the neighborhood well. Till now I never had to guide them to my address for delivery; EFood has the most intriguing food order system in the country. UI in both their app and web Is very simple and easy to use, enhancing the UX. Their delivery men are also quite professional and knows the neighborhood well. Till now I never had to guide them to my address for delivery;  '
                                : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab ullam modi quo, tempora nobis officiis minima sequi. Adipisci soluta unde dolorem dolorum quidem porro, exercitationem, cum aliquam consectetur obcaecati molestias? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab ullam modi quo, tempora nobis officiis minima sequi. Adipisci soluta unde dolorem dolorum quidem porro, exercitationem, cum aliquam consectetur obcaecati molestias? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab ullam modi quo, tempora nobis officiis minima sequi. Adipisci soluta unde dolorem dolorum quidem porro, exercitationem, cum aliquam consectetur obcaecati molestias?'  
                            }</Text>
                            <Flex mt='3rem' justify='space-between'>
                                <Box className='client__name'>
                                    <Heading fontSize='1.5rem '>{check ? 'Lera Krasniy' : 'Angelina Joli'}</Heading>
                                    <Text>{check ? 'Food Liker SEO' : 'Food Lover SWT'}</Text>
                                </Box>
                                <ButtonGroup>
                                    <Button colorScheme={check ? 'orange' : 'gray'} onClick={() => setCheck(!check)}>
                                        <BsArrowLeft />
                                    </Button>
                                    <Button colorScheme={check ? 'gray' : 'orange'} onClick={() => setCheck(!check)}>
                                        <BsArrowRight />
                                    </Button>
                                </ButtonGroup>
                            </Flex>
                        </Box>
                    </Flex>
                </Box>
            </Container>
        </Box>
    </>
  )
}

export default Client