import { Box, Button, Flex, Center, Select } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export function ModalSelectTicket(props) {
 const tickets = [1, 2, 3, 4, 5, 6, 7, 8];
 return (
  <>
   <Center padding="20px" gap="10px" flexDir={'column'}>
    <Box fontSize="30px">Select Ticket</Box>

    <Box>
     <Box>Select Tickets:</Box>
     <Select w="200px">
      {tickets.map((ticket) => (
       <option>{ticket}</option>
      ))}
     </Select>
    </Box>

    <Flex gap="10px">
     <Link to={`/movies/${props.movie.id}/theaters/id/seat`}>
      <Button
       color="white"
       bgColor={'#006666'}
       border="1px solid #005350"
       padding="6px 12px"
       //   w="59px"
      >
       CONTINUE
      </Button>
     </Link>

     <Button
      bgColor="white"
      border={'1px solid lightgray'}
      color="1px solid #005350"
      padding="6px 12px"
      onClick={props.onClose}
     >
      CANCEL
     </Button>
    </Flex>
   </Center>
  </>
 );
}
