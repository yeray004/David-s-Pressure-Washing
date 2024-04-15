'use client'
import Image from 'next/image';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


import img1 from '../../public/images/works/img1.webp'
import img2 from '../../public/images/works/img2.webp'
import img3 from '../../public/images/works/img3.webp'
import img4 from '../../public/images/works/img4.webp'

function HomeCarousel() {
  return (
    <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
    >
      <SwiperSlide className='carousel-div'>
        <Image src={img1} alt='water splash' className='carousel-img' />
      </SwiperSlide>
      <SwiperSlide className='carousel-div'>
        <Image src={img2} alt='water splash' className='carousel-img' />
      </SwiperSlide>
      <SwiperSlide className='carousel-div'>
        <Image src={img3} alt='water splash' className='carousel-img' />
      </SwiperSlide>
      <SwiperSlide className='carousel-div'>
        <Image src={img4} alt='water splash' className='carousel-img' />
      </SwiperSlide>
    </Swiper>
  );
}

export default HomeCarousel;