import { Center, Image, Flex, Icon, Box } from '@chakra-ui/react';
import header from '../assets/header.png';
import { RxHamburgerMenu } from 'react-icons/rx';
import { Link, useNavigate } from 'react-router-dom';

export default function Navbar() {
 const nav = useNavigate();
 return (
  <Center
   flexDir={'column'}
   justifyItems={'normal'}
   position={'sticky'}
   top="0"
   zIndex={2}
   width={'100vw'}
   maxW="420px"
   //    border="0px solid white"
  >
   <Image
    w="199px"
    onClick={() => nav('/home')}
    src={header}
    position={'absolute'}
    top={0}
   />

   <Flex h="48px" bgColor="rgb(0,83,80)" w="100%">
    <Center h="100%" padding={'10px'}>
     <Icon as={RxHamburgerMenu} boxSize={'26px'} color={'white'}></Icon>
    </Center>
   </Flex>
  </Center>
 );
}
