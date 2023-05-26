import { Flex, Image, Center, Grid, GridItem } from '@chakra-ui/react';
import MovieCard from './MovieCard';
export default function MovieList({ movies }) {
 return (
  <>
   <Grid
    gap={'10px'}
    templateColumns="repeat(2, 1fr)"
    paddingX={'10px'}
    maxW="420px"
    w="100vw"
   >
    {movies?.map((val, idx) => (
     <GridItem w="100%" paddingY={'5px'} key={idx}>
      <MovieCard key={idx} {...val} />
     </GridItem>
    ))}
   </Grid>
  </>
 );
}
