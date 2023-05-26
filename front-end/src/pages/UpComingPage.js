import { Box, Center } from '@chakra-ui/react';
import Navbar from '../components/Navbar';
import Carousel from '../components/Carousel';
import MovieList from '../components/MovieList';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

export default function UpComingPage() {
 const movies = [
  {
   img_url: 'https://web3.21cineplex.com/movie-images/23BDIR.jpg',
   title: 'BEAUTIFUL DISASTER'
  },
  {
   img_url: 'https://web3.21cineplex.com/movie-images/13DJJK.jpg',
   title: 'BEAUTIFUL DISASTER'
  },
  {
   img_url: 'https://web3.21cineplex.com/movie-images/13GGEP.jpg',
   title: 'GANJIL GENAP'
  },
  {
   img_url: 'https://web3.21cineplex.com/movie-images/23HYPC.jpg',
   title: 'HYPNOTIC'
  },
  {
   img_url: 'https://web3.21cineplex.com/movie-images/22SASV.jpg',
   title: 'SPIDER-MAN: ACROSS THE SPIDER-VERSE'
  }
 ];
 return (
  <>
   <Box paddingBottom={'80px'}>
    <MovieList movies={movies} />
   </Box>
  </>
 );
}
