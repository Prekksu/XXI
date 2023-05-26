import './App.css';
import { useState, useEffect } from 'react';
import { Routes } from 'react-router-dom';
import routes from './routes/Routes';
import Loading from './components/Loading';
import { Center, Flex } from '@chakra-ui/react';

function App() {
 const [isLoading, setIsLoading] = useState(true);

 useEffect(() => {
  setTimeout(() => {
   setIsLoading(false);
  }, 1000);
 }, [isLoading]);

 return (
  <>
   {isLoading ? (
    <Loading /> // <Loading />
   ) : (
    <Flex justifyContent={'center'} minH="100vh">
     <Center maxW="420px" flexDir={'column'} justifyContent={'normal'}>
      <Routes>{routes.map((val) => val)}</Routes>
     </Center>
    </Flex>
   )}
  </>
 );
}
export default App;
