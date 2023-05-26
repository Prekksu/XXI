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
 Textarea,
 useDisclosure,
 Modal,
 ModalOverlay,
 ModalContent,
 ModalBody
} from '@chakra-ui/react';
import moment from 'moment/moment';
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
import { ModalSelectTicket } from './Modals';

export default function TheaterMovie({ movie }) {
 const { isOpen, onOpen, onClose } = useDisclosure();

 return (
  <>
   <Flex
    padding="10px"
    paddingTop={'30px'}
    gap="20px"
    w="100vw"
    maxW="420px"
    flexDir={'column'}
   >
    <Flex w="100%">
     <Image src={movie.img_url} w="180px" h="267px" />

     <Center w="100%" alignItems={'start'} fontSize={'14px'}>
      <Flex flexDir="column" gap="10px">
       <Box fontWeight={'bold'} textTransform={'uppercase'}>
        {movie.title}
       </Box>

       <Flex gap="3px">
        <Center>
         <FaClock />
        </Center>
        {movie.duration} Minutes
       </Flex>

       <Center
        border="1px solid lightgrey"
        w="90px"
        borderRadius={'5px'}
        color="#005350"
        //    padding="5px 10px"
       >
        IMAX 2D
       </Center>
      </Flex>
     </Center>
    </Flex>
   </Flex>

   <Flex w="100%" padding="10px" flexDir={'column'}>
    <Flex gap="5px">
     GANDARIA CITY
     <Center alignItems={'end'}>
      <Image
       src="https://m.21cineplex.com/images/logo_imax.png"
       h="14px"
      ></Image>
     </Center>
    </Flex>

    <Flex justifyContent={'space-between'} padding="14px 20px">
     {moment().format('yyyy-DD-MM')}
     <Flex>Rp. 65.000</Flex>
    </Flex>

    <Flex padding={'5px'} gap="15px">
     <Center
      border="1px solid "
      w="58px"
      borderRadius={'5px'}
      fontWeight={'600'}
      onClick={onOpen}
      cursor="pointer"
     >
      12:25
     </Center>

     <Center
      border="1px solid "
      w="58px"
      borderRadius={'5px'}
      fontWeight={'600'}
      onClick={onOpen}
      cursor="pointer"
     >
      15:10
     </Center>
    </Flex>
    <Box paddingTop={'10px'}>
     <hr />
    </Box>
   </Flex>

   <Flex w="100%" padding="10px" flexDir={'column'}>
    <Flex gap="5px">
     KELAPA GADING
     <Center alignItems={'end'}>
      <Image
       src="https://m.21cineplex.com/images/logo_imax.png"
       h="14px"
      ></Image>
     </Center>
    </Flex>

    <Flex justifyContent={'space-between'} padding="14px 20px">
     {moment().format('yyyy-DD-MM')}
     <Flex>Rp. 65.000</Flex>
    </Flex>

    <Flex padding={'5px'} gap="15px">
     <Center
      border="1px solid "
      w="58px"
      borderRadius={'5px'}
      fontWeight={'600'}
      onClick={onOpen}
      cursor="pointer"
     >
      12:40
     </Center>

     <Center
      border="1px solid "
      w="58px"
      borderRadius={'5px'}
      fontWeight={'600'}
      onClick={onOpen}
      cursor="pointer"
     >
      15:25
     </Center>
    </Flex>

    <Box paddingTop={'10px'}>
     <hr />
    </Box>
   </Flex>

   {/* //modal */}
   <Modal isOpen={isOpen} onClose={onClose} isCentered>
    <ModalOverlay />
    <ModalContent w="80vw" maxW="300px">
     <ModalSelectTicket movie={movie} isOpen={isOpen} onClose={onClose} />
    </ModalContent>
   </Modal>
  </>
 );
}
