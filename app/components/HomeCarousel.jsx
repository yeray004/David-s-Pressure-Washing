'use client'
import Image from 'next/image';
import Link from 'next/link';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import logo from '../../public/images/logos/MainLogo.png'
import img5 from '../../public/images/works/img5.webp'
import img2 from '../../public/images/works/img2.webp'
import img3 from '../../public/images/works/img3.webp'
import img4 from '../../public/images/works/img4.webp'

function HomeCarousel() {
  return (
    <>
      <div className='carousel-static'>
        <Image src={logo} alt='water splash' className='logo'/>
        <Link href='/contact' className='btn-style-3 text1'>Free estimate</Link>
        <p className='text2 btn-style-3'>+1 (843) 822-6285</p>
      </div>
      <Swiper
          autoplay={{
            delay: 7000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="mySwiper"
        >
        <SwiperSlide className='carousel-div'>
          <Image src={img5} alt='water splash' className='carousel-img' />
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
    </>
  );
}

export default HomeCarousel;