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
 Avatar
} from '@chakra-ui/react';
import {
 FaBell,
 FaClipboard,
 FaClock,
 FaCreditCard,
 FaGift,
 FaHistory,
 FaLock,
 FaMailBulk,
 FaPersonBooth,
 FaPhone,
 FaSignOutAlt,
 FaTimes,
 FaUpload
} from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
export default function Profile() {
 const nav = useNavigate();
 return (
  <>
   <Flex
    paddingY="30px"
    padding="20px"
    flexDir={'column'}
    w="100vw"
    maxW="420px"
   >
    <Flex justifyContent={'normal'}>
     <Flex paddingX={'10px'} w="100px">
      <Avatar boxSize={'73px'} />
     </Flex>
     <Flex flexDir={'column'} paddingX={'20px'} w="100%">
      <Flex fontWeight={'bold'}>jordan s</Flex>
      <Flex>62873283782</Flex>
      <Flex>jordans@mail.com</Flex>
     </Flex>
    </Flex>

    <Flex paddingY={'20px'} flexDir={'column'} paddingBottom={'80px'}>
     {/* Top Up */}
     <Flex
      gap="10px"
      w="100%"
      padding="10px"
      border="1px solid #EBEBEB"
      borderTopRadius={'5px'}
      bgColor={'#E6E6E6'}
     >
      <Center>
       <FaCreditCard />
      </Center>
      Top Up M-Tix
     </Flex>
     <Flex gap="10px" w="100%" padding="10px 20px" border="1px solid #EBEBEB">
      <Center>
       <FaSignOutAlt />
      </Center>
      Reload Balance
     </Flex>
     {/* //account */}
     <Flex
      gap="10px"
      w="100%"
      padding="10px"
      border="1px solid #EBEBEB"
      borderTopRadius={'5px'}
      bgColor={'#E6E6E6'}
     >
      <Center>
       <FaPersonBooth />
      </Center>
      Account
     </Flex>
     <Flex gap="10px" w="100%" padding="10px 20px" border="1px solid #EBEBEB">
      <Center>
       <FaGift />
      </Center>
      My Voucher
     </Flex>
     <Flex gap="10px" w="100%" padding="10px 20px" border="1px solid #EBEBEB">
      <Center>
       <FaCreditCard />
      </Center>
      Partner Loyalty Rewards
     </Flex>
     <Flex gap="10px" w="100%" padding="10px 20px" border="1px solid #EBEBEB">
      <Center>
       <FaBell />
      </Center>
      Inbox
     </Flex>
     <Link to="/profile/edit">
      <Flex gap="10px" w="100%" padding="10px 20px" border="1px solid #EBEBEB">
       <Center>
        <FaPersonBooth />
       </Center>
       Update Profile
      </Flex>
     </Link>

     <Link to="/change-password">
      <Flex gap="10px" w="100%" padding="10px 20px" border="1px solid #EBEBEB">
       <Center>
        <FaLock />
       </Center>
       Change PIN/Password{' '}
      </Flex>
     </Link>

     {/* Transaction History */}
     <Flex
      gap="10px"
      w="100%"
      padding="10px"
      border="1px solid #EBEBEB"
      borderTopRadius={'5px'}
      bgColor={'#E6E6E6'}
     >
      <Center>
       <FaClock />
      </Center>
      Transaction History
     </Flex>
     <Flex gap="10px" w="100%" padding="10px 20px" border="1px solid #EBEBEB">
      <Center>
       <FaCreditCard />
      </Center>
      Purchase History
     </Flex>
     <Flex gap="10px" w="100%" padding="10px 20px" border="1px solid #EBEBEB">
      <Center>
       <FaHistory />
      </Center>
      Top Up History
     </Flex>

     {/* Contact */}
     <Flex
      gap="10px"
      w="100%"
      bgColor={'#E6E6E6'}
      padding="10px"
      border="1px solid #EBEBEB"
     ></Flex>
     <Flex gap="10px" w="100%" padding="10px 20px" border="1px solid #EBEBEB">
      <Center>
       <FaPhone />
      </Center>
      Contact Us
     </Flex>
     <Flex gap="10px" w="100%" padding="10px 20px" border="1px solid #EBEBEB">
      <Center>
       <FaClipboard />
      </Center>
      Term of Services
     </Flex>
     <Flex gap="10px" w="100%" padding="10px 20px" border="1px solid #EBEBEB">
      <Center>
       <FaSignOutAlt />
      </Center>
      <Box onClick={() => nav('/login')}>Logout </Box>
     </Flex>
    </Flex>
   </Flex>
  </>
 );
}
