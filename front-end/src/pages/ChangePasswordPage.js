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
 Box
} from '@chakra-ui/react';
import { FaLock, FaPhone } from 'react-icons/fa';
import { Link } from 'react-router-dom';
export default function ChangePasswordPage() {
 return (
  <>
   <Center flexDir={'column'} w="100vw" maxW="420px" paddingTop="20px">
    <Center fontWeight={'bold'} padding="10px">
     Change New Password
    </Center>
    <Stack spacing={4} w="100vw" maxW="420px" padding="15px">
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
    </Stack>

    <Flex
     justifyContent={'space-between'}
     w="100%"
     padding="10px"
     paddingBottom="20px"
     flexDir={'column'}
    >
     <Center
      w="100%"
      padding="10px"
      paddingBottom="20px"
      borderBottom={'1px solid #333'}
     >
      <Button
       color="white"
       bgColor={'#006666'}
       border="1px solid #005350"
       padding="6px 12px"
      >
       Change Password
      </Button>
     </Center>
    </Flex>
   </Center>
  </>
 );
}

export function ChangePasswordPage2() {
 return (
  <>
   <Center flexDir={'column'} w="100vw" maxW="420px" paddingTop="20px">
    <Center fontWeight={'bold'} padding="10px">
     Change Password
    </Center>
    <Stack spacing={4} w="100vw" maxW="420px" padding="15px">
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
       placeholder="Input New Password"
       border="1px solid #ccc"
       w="100vw"
       maxW="355px"
      />
     </InputGroup>
    </Stack>

    <Flex
     justifyContent={'space-between'}
     w="100%"
     padding="10px"
     paddingBottom="20px"
     flexDir={'column'}
    >
     <Center
      w="100%"
      padding="10px"
      paddingBottom="20px"
      borderBottom={'1px solid #333'}
     >
      <Button
       color="white"
       bgColor={'#006666'}
       border="1px solid #005350"
       padding="6px 12px"
      >
       Change Password
      </Button>
     </Center>
    </Flex>
   </Center>
  </>
 );
}
