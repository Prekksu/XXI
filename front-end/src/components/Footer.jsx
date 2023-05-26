import { Center, Image, Flex, Icon, Box } from '@chakra-ui/react';
import header from '../assets/header.png';
import { RxHamburgerMenu } from 'react-icons/rx';
import { Link } from 'react-router-dom';

export default function Footer() {
 return (
  <Center
   justifyContent={'space-between'}
   position={'fixed'}
   bottom="0"
   padding="0px 15px"
   h="70px"
   zIndex={3}
   width={'100vw'}
   maxW="420px"
   bgColor="white"
   border="0px solid white"
   fontSize={'12px'}
   color="rgb(0,83,80)"
  >
   <Link to="/home">
    <Center flexDir="column">
     <Image
      boxSize="30px"
      src="https://m.21cineplex.com/images/home.png"
     ></Image>
     Playing
    </Center>
   </Link>

   <Link to="/list-city">
    <Center flexDir="column">
     <Image
      boxSize="30px"
      src="https://m.21cineplex.com/images/theater.png"
     ></Image>
     Theater
    </Center>
   </Link>

   <Link to="/upcoming">
    <Center flexDir="column">
     <Image
      boxSize="30px"
      src="https://m.21cineplex.com/images/comingsoon.png"
     ></Image>
     Up Coming
    </Center>
   </Link>

   <Link to="/profile">
    <Center flexDir="column">
     <Image
      boxSize="30px"
      src="https://m.21cineplex.com/images/mtix.png"
     ></Image>
     My M-Tix
    </Center>
   </Link>
  </Center>
 );
}
