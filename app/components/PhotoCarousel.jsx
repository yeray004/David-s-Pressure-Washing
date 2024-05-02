'use client'
import { Gallery } from 'react-grid-gallery';
import Lightbox from 'yet-another-react-lightbox';
import { useState } from 'react';
import 'yet-another-react-lightbox/styles.css';

export default function PhotoCarousel() {
  const IMAGES = [
    {src: 'https://static.fundacion-affinity.org/cdn/farfuture/PVbbIC-0M9y4fPbbCsdvAD8bcjjtbFc0NSP3lRwlWcE/mtime:1643275542/sites/default/files/los-10-sonidos-principales-del-perro.jpg'},
    {src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTndT3Cklma_vcR5_IK3RWkZTDKwnEJQHzkxbAJh_57BA_0KTnJ5JUgVVssDlFDTLWxlU&usqp=CAU'},
    {src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE7l0RtxgEWxYvgaNF7-edrNlAyDR1FIU3en8JxxjE-A&s'},
    {src: 'https://cdn.shopify.com/s/files/1/1574/5941/files/pug111_large.JPG?v=1511982971'}
  ];
  const slides = IMAGES.map(({ src }) => ({ src }));

  const [images, setImages] = useState(IMAGES);
  const [index, setIndex] = useState(-1); // State to store the selected index in the Lightbox
  const handleClick = (index) => {
    const nextImages = images.map((image, i) =>
      i === index ? { ...image, isSelected: !image.isSelected } : image
    );
    setImages(nextImages);
    setIndex(index); // When clicked, updates the selected index for the Lightbox
  };

  return (
    <>
      <Gallery images={IMAGES} onClick={handleClick} enableImageSelection={false} />
      <Lightbox slides={slides} open={index >= 0} index={index} close={() => setIndex(-1)} />
    </>
  );
};