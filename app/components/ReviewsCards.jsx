'use client'
// Import Next.js
import Image from 'next/image';
// Images
import img14 from '../../public/images/works/img14.webp';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';
// import required modules
import { EffectCards } from 'swiper/modules';

export default function ReviewsCards() {
  return (
    <>
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div>
            <Image  src={img14} alt='spalshIcon' />
          </div>
          <h5>Name</h5>
          <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”</p>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <Image  src={img14} alt='spalshIcon' />
          </div>
          <h5>Name</h5>
          <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”</p>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <Image  src={img14} alt='spalshIcon' />
          </div>
          <h5>Name</h5>
          <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”</p>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <Image  src={img14} alt='spalshIcon' />
          </div>
          <h5>Name</h5>
          <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”</p>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
