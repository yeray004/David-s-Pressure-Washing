import Link from 'next/link'

export default function Footer() {
  return (
    <footer>
      <div>
        <ul>
          <li><Link href='/'>Home</Link></li>
          <li><Link href='/services'>Services</Link></li>
          <li><Link href='/about'>About Us</Link></li>
          <li><Link href='/works'>Our Works</Link></li>
          <li><Link href='/contact'>Contact Us</Link></li>
        </ul>
      </div>
      <div>
        <img src='' alt='David´s Pressure Washing Logo' />
        <div>
          <svg>insta</svg>
          <svg>face</svg>
          <svg>Tiktok</svg>
        </div>
        <p>hola</p>
      </div>
    </footer>
  )
}
