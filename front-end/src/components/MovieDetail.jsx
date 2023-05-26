import {
 Center,
 Flex,
 Image,
 Input,
 InputGroup,
 Stack,
 InputLeftAddon,
 InputRightAddon,
 InputLeftElement,
 Button,
 Box,
 Textarea
} from '@chakra-ui/react';
import {
 FaAddressBook,
 FaAddressCard,
 FaClock,
 FaFaucet,
 FaKey,
 FaLock,
 FaMailBulk,
 FaMailchimp,
 FaPersonBooth,
 FaPhone,
 FaVoicemail
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function MovieDetail({ movie }) {
 return (
  <>
   <Flex flexDir={'column'} w="100vw" maxW="420px">
    <Center flexDir="column" py={'10px'}>
     <Box fontWeight={'bold'} textTransform={'uppercase'}>
      {movie?.title}
     </Box>
     <Box> {movie?.category}</Box>
     <Box w="364px" paddingTop={'10px'}>
      <hr />
     </Box>
    </Center>

    <Flex padding="20px" paddingTop={'10px'} gap="20px" w="100vw" maxW="420px">
     <Image src={movie.img_url} w="170px" h="254px" />

     <Center w="100%" alignItems={'start'} fontSize={'14px'}>
      <Flex flexDir="column" gap="10px">
       <Flex gap="3px">
        <Center>
         <FaClock />
        </Center>
        135 Minutes
       </Flex>

       <Center
        border="1px solid #005350"
        w="90px"
        borderRadius={'5px'}
        fontWeight={'600'}
        color="#005350"
        padding="5px 10px"
       >
        IMAX 2D
       </Center>

       <Center
        border="1px solid #005350"
        w="150px"
        borderRadius={'5px'}
        fontWeight={'600'}
        bgColor="#006666"
        color="white"
        padding="5px 10px"
       >
        PLAYING AT
       </Center>

       <Link to={`/movies/${movie.id}/theaters/theater`}>
        <Center
         border="1px solid #005350"
         w="150px"
         borderRadius={'5px'}
         fontWeight={'600'}
         bgColor="#006666"
         color="white"
         padding="5px 10px"
         cursor="pointer"
        >
         BUY TICKET
        </Center>
       </Link>

       <Center
        border="1px solid #005350"
        w="150px"
        borderRadius={'5px'}
        fontWeight={'600'}
        bgColor="#006666"
        color="white"
        padding="5px 10px"
       >
        TRAILER
       </Center>
      </Flex>
     </Center>
    </Flex>
    <Flex flexDir={'column'} padding="20px" gap="10px">
     {movie?.synopsis}

     <Flex flexDir={'column'}>
      <b>Producer</b>
      <span> {movie?.Producer}</span>
     </Flex>
     <Flex flexDir={'column'}>
      <b>Director</b>
      <span>{movie?.Director}</span>
     </Flex>
     <Flex flexDir={'column'}>
      <b>Writer</b>
      <span>{movie?.Writer}</span>
     </Flex>
     <Flex flexDir={'column'}>
      <b>Cast</b>
      <span>{movie?.Cast}</span>
     </Flex>
     <Flex flexDir={'column'}>
      <b>Distributor</b>
      <span>{movie?.Distributor}</span>
     </Flex>
     <Flex flexDir={'column'}>
      <b>Website</b>
      <span></span>
     </Flex>
    </Flex>
   </Flex>
  </>
 );
}
