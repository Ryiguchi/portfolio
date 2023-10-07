'use client';

import { useEffect, useState } from 'react';

import type { FC } from 'react';

import styles from './FlashLight.module.sass';

const FlashLight: FC = () => {
  const [xOffset, setXOffset] = useState(0);
  const [yOffset, setYOffset] = useState(0);

  const [distanceFromTop, setDistanceFromTop] = useState(0);

  useEffect(() => {
    document.addEventListener('mousemove', event => {
      const mouseX = event.clientX;
      const mouseY = event.clientY;

      setXOffset(mouseX);
      setYOffset(mouseY);
    });

    document.addEventListener('scroll', event => {
      setDistanceFromTop(window.scrollY);
    });
  }, []);
  return (
    <div
      style={{
        backgroundImage: `radial-gradient(600px at ${xOffset}px ${
          yOffset + distanceFromTop
        }px, rgba(29, 78, 216, 0.15), transparent 80% )`,
      }}
      className={styles.flashlight}
    ></div>
  );
};

export default FlashLight;
