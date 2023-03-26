import React, { useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { RestContext } from '../Context/Context';
import { Box, Container, Text, Heading, Flex, Image } from '@chakra-ui/react';
import { BsFillArrowLeftCircleFill } from 'react-icons/bs';

function SimpleRest() {

    const { id }  = useParams();
    const [rest, setRest] = useContext(RestContext);

    const navigate = useNavigate();
    const goBack = () => navigate(-1);

  return (
    <>
      <Box as='section' className='simple__section' py='3rem'>
        <Container maxW='1100px' >
            <Box padding='1rem' cursor='pointer' onClick={() => goBack()}>
            <BsFillArrowLeftCircleFill fontSize='2rem' color='#FF6838' />
            </Box>
            <Flex align='center' >
            <Box w={['90%', '80%']} margin='0 auto' boxShadow='lg' borderRadius={'53px 5px 0px 0px'}>
                {rest.map((r) => {
                    if(r.id == id) {
                        return (
                            <Flex direction={['column', 'column', 'row']}>
                                <Box className='res__image'>
                                    <Image src={r.image} />
                                </Box>
                                <Box w='60%' padding='1rem'>
                                    <Heading>{r.name}</Heading>
                                    <Text m='1rem 0'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, velit autem provident corrupti incidunt nobis fuga culpa fugiat nihil, harum quas quasi illo temporibus. Unde, quas? Maiores atque, minus praesentium cupiditate soluta beatae eius officiis! Itaque, ipsam debitis. Sequi, quam.</Text>
                                    <Text>Work Time: {r.time}</Text>
                                </Box>
                            </Flex>
                        )
                    }
                })}
            </Box>
            </Flex>
        </Container>  
      </Box>   
    </>
  )
}

export default SimpleRest