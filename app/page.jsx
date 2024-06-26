import Image from "next/image";
import Link from 'next/link'
// Components
import HomeCarousel from './components/HomeCarousel';
//Styles and Images
import './Home.css'
import splash1 from '../public/images/other/splash1.svg';
import splash2 from '../public/images/other/splash2.png';
import img3 from '../public/images/works/img3.webp';
import img10 from '../public/images/works/img10.webp';
import img12 from '../public/images/works/img12.webp';
import img13 from '../public/images/works/img13.webp';

export default function Home() {
  return (
    <main>
      {/* carrousel */}
      <section className='home-carousel'>
        <HomeCarousel/>
      </section>
      {/* home-section1 */}
      <section className='home-section1'>
        <h1>Let us Make your home shine!</h1>
        <div>
          <Image src={splash1} alt='water splash' />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <Image  src={img3} alt='house image' />
        </div>
      </section>
      {/* home-section2 */}
      <section className='home-section2'>
        <hr />
        <div>
          <Image src={img12} alt='house image' />
          <div>
            <h1>What we do</h1>
            <p>Step into a world of pristine cleanliness with our premier pressure washing services. From our gentle yet effective pressure shower to our meticulous soft shower treatments, we ensure every surface gleams with brilliance. Transform your driveway and sidewalks into pathways of perfection, inviting guests with every step. Experience the difference of our expert care – where quality meets satisfaction, one wash at a time.</p>
            <div>
              <Link href='/services' className='btn-style-1'>Services</Link>
              <Link href='/works' className='btn-style-1'>See our work</Link>
            </div>
          </div>
          <Image  src={img10} alt='house image' />
        </div>
        <hr />
      </section>
      {/* home-section3 */}
      <section className='home-section3'>
        <Image  src={splash2} alt='water splash' />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <Image  src={img13} alt='water splash' />
      </section>
      <Link href='/contact' className='btn-style-2 home-last-btn'>contact us</Link>
    </main>
  );
}
