'use client';

import SectionHeader from '../../common/SectionHeader';
import styles from './AboutSection.module.sass';

import type { FC } from 'react';

const AboutSection: FC<TAboutData> = ({ text }) => {
  return (
    <section className={styles.about_section} id="about">
      <SectionHeader section="about" />
      <div className={styles.wrapper}>
        {text.map(par => (
          <p key={par.substring(0, 10)}>{par}</p>
        ))}
      </div>
    </section>
  );
};

export default AboutSection;
