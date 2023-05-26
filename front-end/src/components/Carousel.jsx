import Slider from 'react-slick';
import { useState } from 'react';
import { Box, IconButton, useBreakpointValue } from '@chakra-ui/react';
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../css/style.css';

export default function Carousel() {
 const cards = [
  'https://web3.21cineplex.com/mobile-banner/mtix%20pay%20App.jpg',
  'https://web3.21cineplex.com/mobile-banner/MakinDekatApps.jpg',
  'https://web3.21cineplex.com/mobile-banner/Caramel%20SachetApps.jpg'
 ];

 const settings = {
  // fade: true,
  dots: true,

  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 50000,
  slidesToShow: 1,
  slidesToScroll: 1
 };

 return (
  <Box className="carousel" w="100vw" maxW="414px" padding={'10px'}>
   {/* Slider */}
   <Slider {...settings}>
    {cards.map((url, index) => (
     <Box
      key={index}
      className="carousel-card"
      position="relative"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      h="176px"
      backgroundImage={`url('${url}')`}
     />
    ))}
   </Slider>
  </Box>
 );
}
