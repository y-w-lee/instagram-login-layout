import React, { useState, useEffect, useRef } from 'react';
import styles from '@/styles/ImageSlider.module.css';

const ImageSlider = () => {
  const [images, setImages] = useState(["ig-img-1.png", "ig-img-2.png", "ig-img-3.png", "ig-img-4.png"]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const screenshotRef = useRef();

  useEffect(() => {
    const intervalId = setInterval(() => {
      screenshotRef.current.style.opacity = 0.1;
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        screenshotRef.current.setAttribute("src", `/images-ig/${images[currentImageIndex]}`);
        screenshotRef.current.style.opacity = 1;
      }, 500);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [images, currentImageIndex]);

  return (
    <div className={styles.Container}>
      <img
        className={styles.BackgroundImage}
        src="/images-ig/phones.png"
        alt="phone bg"
      />
      <img
        ref={screenshotRef}
        className={styles.ImageSlider}
        src={`/images-ig/${images[currentImageIndex]}`}
        alt="gallery"
      />
    </div>
  );
};

export default ImageSlider;

