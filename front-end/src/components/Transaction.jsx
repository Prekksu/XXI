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
 FaTicketAlt,
 FaVoicemail
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { ModalSelectTicket } from './Modals';

export default function Transaction() {
 return (
  <>
   <Flex flexDir={'column'} w="100vw" maxW="420px" fontSize={'14px'}>
    <Center flexDir="column" py={'10px'}>
     <Box fontWeight={'bold'} textTransform={'uppercase'}>
      Order Confirmation
     </Box>
     <Flex padding="10px 20px" gap="20px" w="100vw" maxW="420px">
      <Image
       src="https://web3.21cineplex.com/movie-images/22LMX2.jpg"
       w="170px"
       h="254px"
      />

      <Center w="100%" alignItems={'start'} fontSize={'14px'}>
       <Flex flexDir="column" gap="10px">
        <Flex gap="3px" textTransform={'uppercase'} fontWeight={'bold'}>
         THE LITTLE MERMAID
        </Flex>

        <Flex gap="3px" textTransform={'uppercase'}>
         KELAPA GADING XXI
        </Flex>

        <Flex gap="3px">Date: {moment().format('YYYY-MM-DD')}</Flex>

        <Flex gap="3px">Time: {moment().format('HH:mm')}</Flex>
        <Flex gap="3px">Studio: 2</Flex>
       </Flex>
      </Center>
     </Flex>

     <Flex
      flexDir={'column'}
      padding="5px 20px"
      gap="10px"
      w="100%"
      fontSize={'14px'}
     >
      <Flex justifyContent={'space-between'}>
       <Box>Seats</Box>
       <b>A1, A2, A3 </b>
      </Flex>

      <Flex justifyContent={'space-between'}>
       <Box>Ticket Price</Box>
       <Box>Rp 25,000 x 3</Box>
       <Box>Rp 200,000</Box>
      </Flex>

      <Flex justifyContent={'space-between'}>
       <Box>Adm Fee</Box>
       <Box>Rp 20,000</Box>
      </Flex>

      <Flex justifyContent={'space-between'}>
       <Box>Promo</Box>
       <b color="red">Rp 0</b>
      </Flex>

      <Flex justifyContent={'space-between'}>
       <Box>Total Payment</Box>
       <b>Rp 220,000</b>
      </Flex>

      <Box color="red">
       *Tickets that have been purchased can not be exchanged or refunded.
      </Box>
      <Box color="red">
       *Children (2 years old or above) are required to purchase ticket.
      </Box>

      <Center
       justifyContent={'space-between'}
       border="1px dashed black"
       borderStyle="dashed"
       padding="5px"
       borderRadius={'5px'}
      >
       <Box>
        <b>Pay with</b>
        <Flex justifyContent={'space-between'}>
         <Flex gap="10px" w="100%">
          <Image
           w={'50px'}
           src="data:image/jpeg;base64,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"
          ></Image>
          <Center fontWeight={'bold'}>GOPAY</Center>
         </Flex>
        </Flex>
       </Box>

       <Box
        padding={'5px'}
        boxShadow={'1px 1px 3px 0px rgba(0,0,0,0.3)'}
        border="1px solid lightgrey"
        borderRadius={'5px'}
        h="35px"
        fontWeight={'700'}
       >
        Change
       </Box>
      </Center>

      <Center
       justifyContent={'space-between'}
       border="1px dashed black"
       borderStyle="dashed"
       padding="5px"
       borderRadius={'5px'}
      >
       <Box>
        <Flex justifyContent={'space-between'}>
         <Flex gap="10px" w="100%">
          <Center>
           <FaTicketAlt w="50px" />
          </Center>
          <Center fontWeight={'bold'}>Voucher</Center>
         </Flex>
        </Flex>
        <span>Promo: Rp 0</span>
       </Box>

       <Box
        padding={'5px'}
        boxShadow={'1px 1px 3px 0px rgba(0,0,0,0.3)'}
        border="1px solid lightgrey"
        borderRadius={'5px'}
        h="35px"
        fontWeight={'700'}
       >
        See All
       </Box>
      </Center>
     </Flex>

     <Center
      padding="20px"
      justifyContent={'space-between'}
      w="100%"
      fontSize={'14px'}
     >
      <Button
       color="white"
       bgColor={'#006666'}
       border="1px solid #005350"
       padding="6px 12px"
       //   w="59px"
       W="100vw"
       maxW="153px"
      >
       CONFIRM ORDER
      </Button>

      <Button
       bgColor="white"
       border={'1px solid lightgray'}
       color="1px solid #005350"
       padding="6px 12px"
       w="153px"
       maxW="100%"
      >
       CANCEL
      </Button>
     </Center>
    </Center>
   </Flex>
  </>
 );
}
