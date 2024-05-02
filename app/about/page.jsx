import Image from "next/image";
import Link from 'next/link'
// Components
import '../components/PhotoCarousel.jsx'
//Styles and Images
import './about.css'
import img10 from '../../public/images/works/img10.webp';
import PhotoCarousel from "../components/PhotoCarousel.jsx";

export default function About() {
  return (
    <main>
      <h1 className='about-title'>Who we are</h1>
      <section>
        <div className='about-top-txt'>
          <Image  src={img10} alt='house image' />
          <Image  src={img10} alt='house image' />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <hr />
          <hr />
        </div>
        <div className='about-bottom-txt'>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <div>
            <Link href='/services' className='btn-style-1'>Services</Link>
            <Link href='/works' className='btn-style-1'>See our work</Link>
          </div>
        </div>
      </section>
      <section className='about-gallery'>
        <PhotoCarousel/>
      </section>
    </main>
  )
}
