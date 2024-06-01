import React, { useEffect } from 'react';
import './StarEffect.css';

const StarEffect = () => {
  useEffect(() => {
    const createStar = () => {
      const star = document.createElement('div');
      star.classList.add('star');
      star.style.left = `${Math.random() * 100}%`;
      star.style.animationDuration = `${Math.random() * 3 + 2}s`; 
      star.style.animationDelay = `${Math.random() * 2}s`;
      document.body.appendChild(star);
      setTimeout(() => {
        star.remove();
      }, 5000);
    };

    const interval = setInterval(createStar, 300);
    return () => clearInterval(interval);
  }, []); 

  return <></>; 
};

export default StarEffect;