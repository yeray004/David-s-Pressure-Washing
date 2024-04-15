//Next.js
import Link from 'next/link'
import Image from 'next/image';
//Components
import ReviewsCards from '../components/ReviewsCards.jsx';
//Styles and images
import './works.css'
import img14 from '../../public/images/works/img14.webp';
import splashImage from '../../public/images/other/splash1.svg';
import splashIcon from '../../public/images/other/splashIcon.png';



export default function Works() {
  return (
    <main>
      <h1 className='works-title'>Our Works</h1>
      <section className='works-section'>
        <div>
          <h3>Tipo de Trabajo realizado</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        </div>
        <div>
          <Image  src={img14} alt='spalshIcon' />
          <Image  src={img14} alt='spalshIcon' />
        </div>
      </section>
      <Link href='/contact' className='btn-style-2 works-btn'>contact us</Link>
      <section className='works-section'>
        <div>
          <h3>Tipo de Trabajo realizado</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        </div>
        <div>
          <Image  src={img14} alt='spalshIcon' />
          <Image  src={img14} alt='spalshIcon' />
        </div>
      </section>
      <div className='works-reference-point'>
        <div>
          <Image  src={splashIcon} alt='spalshIcon' />
          <Image  src={splashIcon} alt='spalshIcon' />
          <Image  src={splashIcon} alt='spalshIcon' />
        </div>
        <Image  src={splashImage} alt='spalshIcon' className='work-splash'/>
      </div>
      <section className='works-section'>
        <div>
          <h3>Tipo de Trabajo realizado</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        </div>
        <div>
          <Image  src={img14} alt='spalshIcon' />
          <Image  src={img14} alt='spalshIcon' />
        </div>
      </section>
      <section className='work-reviews'>
        <h2>Reviews</h2>
        <ReviewsCards/>
      </section>
    </main>
  )
}
