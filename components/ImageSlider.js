import React, { useState, useEffect } from 'react';
import styles from '@/styles/ImageSlider.module.css';

const ImageSlider = () => {
  const [images, setImages] = useState(["ig-img-1.png", "ig-img-2.png", "ig-img-3.png", "ig-img-4.png"]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const screenshot = document.getElementById("screenshot");

    const intervalId = setInterval(() => {
      screenshot.style.opacity = 0.1;
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        screenshot.setAttribute("src", `/images-ig/${images[currentImageIndex]}`);
        screenshot.style.opacity = 1;
      }, 500);
    }, 3000);

    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, [images]);  

  return (
    <img id="screenshot" className={styles.ImageSlider} src={`/images-ig/${images[currentImageIndex]}`} alt="Screenshot" />
  );
};

export default ImageSlider;

