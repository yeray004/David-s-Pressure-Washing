'use client'
//Next.js
import Link from 'next/link'
import Image from 'next/image';
//Hooks
import { useRef } from 'react';
//Styles, Images
import './Navbar.css'
import logo from '../../public/images/logos/MainLogo.png';
import BurguerMenu from '../../public/icons/BurguerMenu.svg';
import close from '../../public/icons/close.svg';

export default function Navbar() {

const navRef = useRef();

const showNavbar = () => {
  navRef.current.classList.toggle(
    'responsive_nav'
  );
};

return (
  <>
    <header>
      <Image  src={logo} alt='BurguerMenu' />
      <nav ref={navRef}>
          <Link href='/' onClick={showNavbar}>Home</Link>
          <Link href='/services' onClick={showNavbar}>Services</Link>
          <Link href='/about' onClick={showNavbar}>About Us</Link>
          <Link href='/works'onClick={showNavbar}>Our Works</Link>
          <Link href='/contact'onClick={showNavbar}>Contact Us</Link>
        <button
          className='nav-btn nav-close-btn'
          onClick={showNavbar}>
          <Image  src={close} alt='close' />
        </button>
      </nav>
      <button
        className='nav-btn'
        onClick={showNavbar}>
        <Image  src={BurguerMenu} alt='BurguerMenu' />
      </button>
    </header>
    <div className='nav-height'></div>
  </>
);
}