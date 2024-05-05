//Next.js
import Link from 'next/link'
import Image from 'next/image';
//Styles and images
import './contact.css'
import img5 from '../../public/images/works/img5.webp';
import phone from '../../public/icons/phone.svg';
import ig from '../../public/icons/ig.svg';
import tiktok from '../../public/icons/tiktok.svg';
import ContactMessage from '../components/ContactMessage';


export default function Contact() {
  return (
    <main>
      <section className='contact-section'>
        <Image  src={img5} alt='spalshIcon' className='contact-section-img'/>
        <section>
          <div className='contact-section-1'>
            <h1>Get in touch</h1>
            <p>We pride ourselves on delivering exceptional service to our valued customers. Whether you have questions, feedback, or need assistance, our dedicated team is here to help. Reach out to us today and experience our commitment to quality service firsthand!</p>
            <p>OUR SOCIAL NETWORKS</p>
            <div>
              <Image  src={phone} alt='spalshIcon' />
              <Image  src={ig} alt='spalshIcon' />
              <Image  src={tiktok} alt='spalshIcon' />
            </div>
            <p>+1 (843) 822-6285</p>
          </div>
          <div className='contact-section-2'>
            <p>BOOK A FREE ESTIMATE</p>
            <ContactMessage/>
          </div>
        </section>
      </section>
      <section className='ig-widget'>
        <div class="elfsight-app-05e17371-f1d6-40e8-ab3a-b3ee2cec0ec8" data-elfsight-app-lazy></div>
      </section>
    </main>
  )
}
