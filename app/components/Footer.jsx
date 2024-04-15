import Link from 'next/link'
import Image from 'next/image';
//Styles, Images
import './Footer.css'
import logo from '../../public/images/logos/MainLogo.svg';
import ig from '../../public/icons/ig.svg';
import tiktok from '../../public/icons/tiktok.svg';
import facebook from '../../public/icons/facebook.svg';


export default function Footer() {
  return (
    <footer>
      <div>
        <Link href='/'>Home</Link>
        <Link href='/services'>Services</Link>
        <Link href='/about'>About Us</Link>
        <Link href='/works'>Our Works</Link>
        <Link href='/contact'>Contact Us</Link>
      </div>
      <Image  src={logo} alt='David´s Pressure Washing Logo' className='footer-logo'/>
      <div>
        <div>
          <Image  src={ig} alt='ig' />
          <Image  src={tiktok} alt='tiktok' />
          <Image  src={facebook} alt='facebook' />
        </div>
        <p className='btn-style-3'>+1 (843) 822-6285</p>
      </div>
    </footer>
  )
}
