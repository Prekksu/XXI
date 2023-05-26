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
 ModalBody,
 Grid,
 GridItem,
 useToast
} from '@chakra-ui/react';
import moment from 'moment/moment';
import {
 FaAddressBook,
 FaAddressCard,
 FaClock,
 FaCouch,
 FaFaucet,
 FaKey,
 FaLock,
 FaMailBulk,
 FaMailchimp,
 FaPersonBooth,
 FaPhone,
 FaVoicemail
} from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { ModalSelectTicket } from './Modals';
import { MdEventSeat } from 'react-icons/md';
import { useState } from 'react';
export default function Seat({ movie }) {
 let counter = -1;
 let seats = 'abcdefghij'.toUpperCase().split('');
 const toast = useToast();
 const nav = useNavigate();
 function OneSeat() {
  const [selected, setSelected] = useState(false);

  return (
   <FaCouch
    color={selected ? 'orange' : 'green'}
    onClick={() => setSelected(!selected)}
    cursor={'pointer'}
   />
  );
 }

 return (
  <>
   <Flex
    padding="20px"
    w="100vw"
    maxW="420px"
    fontSize={'14px'}
    gap="10px"
    flexDir="column"
   >
    <Flex
     w="100%"
     borderRadius={'5px'}
     padding={'10px'}
     gap="10px"
     border={'1px solid lightgrey'}
     flexDir="column"
    >
     <Flex gap="20px">
      <Flex gap="5px">
       <Center>
        <FaCouch color="green" />
       </Center>
       Available
      </Flex>

      <Flex gap="5px">
       <Center>
        <FaCouch color="red" />
       </Center>
       Sold
      </Flex>
     </Flex>

     <Flex flexDir="column">
      <Flex textTransform={'uppercase'} fontWeight={'600'}>
       {movie.title}
      </Flex>
      <Flex>Seats: -</Flex>
      <Flex>
       <a>
        Ticket: <b>0</b>/1
       </a>
      </Flex>
      <Flex>
       <a>
        Cinema: <b>Kelapa Gading XXI</b>
       </a>
      </Flex>
      <Flex>
       <a>
        Studio: <b>3</b>
       </a>
      </Flex>

      <Flex>
       <a>
        Date: <b>{moment().format('YYYY-MM-DD')}</b>, Time:{' '}
        <b>{moment().format('HH:mm')}</b>
       </a>
      </Flex>

      <Flex>
       <a>
        Total Payment: Rp <b>0</b>
       </a>
      </Flex>
     </Flex>
    </Flex>

    <Flex
     w="100%"
     borderRadius={'5px'}
     padding={'10px'}
     gap="10px"
     borderBottom={'1px solid lightgrey'}
     flexDir={'column'}
    >
     <Grid templateColumns={'repeat(11,1fr)'} w="100%">
      {[...Array(100)].map((val, i) => {
       if (i.toString().split('')[1] == 5 || i == 5) {
        counter++;
        return (
         <>
          <GridItem h="21px" key={i + seats[counter]}>
           <Center fontWeight={'700'}> {seats[counter]}</Center>
          </GridItem>
          <GridItem key={i}>
           <Center h="21px">
            <OneSeat key={i} />
           </Center>
          </GridItem>
         </>
        );
       }

       return (
        <GridItem key={i}>
         <Center h="21px">
          <OneSeat key={i} />
          {/* <MdEventSeat color="green" /> */}
         </Center>
        </GridItem>
       );
      })}
     </Grid>

     <Flex justifyContent={'Center'} fontSize={'20px'} fontWeight={'600'}>
      SCREEN
     </Flex>
    </Flex>
    <Center gap="10px" fontSize={'14px'}>
     <Button
      color="white"
      bgColor={'#006666'}
      border="1px solid #005350"
      padding="6px 12px"
      W="100vw"
      maxW="153px"
      onClick={(e) => {
       toast({
        title: `Payment Success`,
        status: 'success',
        isClosable: true
       });
       e.target.disabled = 'disabled';
       new Promise((resolve) =>
        setTimeout(() => {
         resolve(nav('/home'));
        }, 1000)
       );
      }}
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
   </Flex>
  </>
 );
}
