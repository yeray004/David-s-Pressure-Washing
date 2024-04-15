//Next.js
/* import Link from 'next/link' */
import Image from 'next/image';
//Styles and images
import splashIcon from '../../public/images/other/splashIcon.png';


export default function Services() {
  return (
    <main>
      <div>
        <h1>Discover our services</h1>
        <Image  src={splashIcon} alt='spalshIcon' />
      </div>
      <section>
        <div>
          <h3>Pressure Washing</h3>

        </div>
      </section>
    </main>
  )
}
