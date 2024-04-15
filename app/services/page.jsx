//Next.js
import Link from 'next/link'
import Image from 'next/image';
//Styles and images
import './services.css'
import splashIcon from '../../public/images/other/splashIcon.png';
import img2 from '../../public/images/works/img2.webp';
import img14 from '../../public/images/works/img14.webp';
import img6 from '../../public/images/works/img6.webp';


export default function Services() {
  return (
    <main>
      <div className='services-title'>
        <h1>Discover our services</h1>
        <Image  src={splashIcon} alt='spalshIcon' />
      </div>
      <section className='services-card-container'>
        <div className='services-card'>
          <div>
            <h3>Pressure Washing</h3>
            <div className='services-filter'>
              <Image  src={img2} alt='img2' />
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
        </div>
        <div className='services-card'>
          <div>
            <h3>soft shower</h3>
            <div className='services-filter'>
              <Image  src={img14} alt='img14' />
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
        </div>
        <div className='services-card'>
          <div>
            <h3>driveway and sidewalk</h3>
            <div className='services-filter'>
              <Image  src={img6} alt='img6' />
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
        </div>
      </section>
      <div className='services-btn'>
        <Link href='/contact' className='btn-style-2'>get in contact with US</Link>
      </div>
    </main>
  )
}
