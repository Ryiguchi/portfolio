'use client';

import { useEffect, useState } from 'react';

import styles from './FlashLight.module.sass';

import type { FC } from 'react';

const FlashLight: FC = () => {
  const [xOffset, setXOffset] = useState(0);
  const [yOffset, setYOffset] = useState(0);

  const [distanceFromTop, setDistanceFromTop] = useState(0);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const mouseX = event.clientX;
      const mouseY = event.clientY;

      setXOffset(mouseX);
      setYOffset(mouseY);
    };

    const handleScroll = () => {
      setDistanceFromTop(window.scrollY);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      style={{
        background: `radial-gradient(600px at ${xOffset}px ${
          yOffset + distanceFromTop
        }px, rgba(29, 78, 216, 0.15), transparent 80% )`,
      }}
      className={styles.flashlight}
    ></div>
  );
};

export default FlashLight;
