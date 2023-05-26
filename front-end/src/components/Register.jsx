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
export default function Register() {
 return (
  <>
   <Flex flexDir={'column'} w="100vw" maxW="420px" paddingTop="20px">
    <Box fontWeight={'bold'} padding="10px 20px">
     M-Tix Registeration
    </Box>

    <Box padding="10px 20px">
     <Box
      padding="20px"
      fontSize="13px"
      color="#8a6d3b"
      bgColor="#fcf8e3"
      border="1px solid #faebcc"
      borderRadius={'10px'}
     >
      <ul style={{ padding: '10px', margin: '0px' }}>
       <li>
        Fill in your profile data as per your ID (Lengkapi data sesuai dengan
        KTP/SIM/PASPOR).
       </li>{' '}
       <li>
        Fill in your active mobile number and email ID (Masukkan nomor dan email
        yang benar).
       </li>{' '}
       <li>
        In case of transaction discrepancy, we can only validate your account
        with your ID (Dalam hal terjadinya perbedaan transaksi, kami hanya dapat
        melakukan verifikasi sesuai dengan data KTP/SIM/PASPOR).
       </li>{' '}
      </ul>
     </Box>
    </Box>

    <Stack spacing={4} w="100vw" maxW="420px" padding="15px" fontSize={'14px'}>
     <Box>
      Handphone:
      <InputGroup h="34px">
       <InputLeftAddon
        bgColor="#eee"
        padding={'6px 12px'}
        color="#555"
        border="1px solid #ccc"
       >
        <FaPhone fontSize="16px" />
       </InputLeftAddon>
       <Input
        padding={'6px 12px'}
        type="tel"
        placeholder="Handphone number"
        border="1px solid #ccc"
        w="100vw"
        maxW="355px"
       />
      </InputGroup>
     </Box>
     <Box>
      Full Name as per your ID:
      <InputGroup h="34px">
       <InputLeftAddon
        bgColor="#eee"
        padding={'6px 12px'}
        color="#555"
        border="1px solid #ccc"
       >
        <FaPersonBooth fontSize="16px" />
       </InputLeftAddon>
       <Input
        padding={'6px 12px'}
        placeholder="Your name"
        border="1px solid #ccc"
        w="100vw"
        maxW="355px"
       />
      </InputGroup>
     </Box>
     <Box>
      Email:
      <InputGroup h="34px">
       <InputLeftAddon
        bgColor="#eee"
        padding={'6px 12px'}
        color="#555"
        border="1px solid #ccc"
       >
        <FaMailBulk fontSize="16px" />
       </InputLeftAddon>
       <Input
        padding={'6px 12px'}
        placeholder="Your valid email"
        border="1px solid #ccc"
        w="100vw"
        maxW="355px"
       />
      </InputGroup>
     </Box>

     <Box>
      Address:
      <InputGroup>
       <InputLeftAddon
        bgColor="#eee"
        padding={'6px 12px'}
        color="#555"
        border="1px solid #ccc"
        h="80px"
       >
        <FaAddressCard fontSize="16px" />
       </InputLeftAddon>
       <Textarea
        padding={'6px 12px'}
        borderLeftRadius={'0'}
        placeholder="Correspondence address based on ID/KTP"
        border="1px solid #ccc"
        w="100vw"
        resize={'none'}
        maxW="355px"
       />
      </InputGroup>
     </Box>

     <Box>
      PIN/Password:
      <InputGroup h="34px">
       <InputLeftAddon
        bgColor="#eee"
        padding={'6px 12px'}
        color="#555"
        border="1px solid #ccc"
       >
        <FaLock fontSize="16px" />
       </InputLeftAddon>
       <Input
        padding={'6px 12px'}
        type="password"
        maxLength={'6'}
        placeholder="6 digits Number"
        border="1px solid #ccc"
        w="100vw"
        maxW="355px"
        onChange={(e) => {
         if (isNaN(e.target.value)) {
          e.target.value = '';
         }
        }}
       />
      </InputGroup>
     </Box>
    </Stack>

    <Flex
     fontSize={'14px'}
     justifyContent={'space-between'}
     w="100%"
     padding="10px"
     paddingY="20px"
     flexDir={'column'}
    >
     <Button
      fontSize={'14px'}
      color="white"
      bgColor={'#006666'}
      border="1px solid #005350"
      w="130px"
     >
      Register Account
     </Button>

     <Box paddingY={'20px'} fontSize="13.6px">
      <Flex>
       <Link>
        By clicking Register Account, I confirm I have agreed to
        <Link>
         {' '}
         <u>Terms & Condition</u>
        </Link>{' '}
        and{' '}
        <Link>
         <u>Privacy Policy</u>
        </Link>{' '}
        of Cinema XXI.
       </Link>
      </Flex>
     </Box>
    </Flex>
   </Flex>
  </>
 );
}
