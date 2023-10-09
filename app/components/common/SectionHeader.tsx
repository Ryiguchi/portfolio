'use client';

import { useEffect } from 'react';

import styles from './SectionHeader.module.sass';

import type { FC } from 'react';

const getSectionOffset = (section: string) => {
  return section === 'about' ? 60 : section === 'projects' ? 120 : 150;
};

type Props = {
  section: string;
};

const SectionHeader: FC<Props> = ({ section }) => {
  useEffect(() => {
    const header = document.getElementById(`${section}-header`)!;

    const sticky = header.offsetTop;

    const sectionOffset = getSectionOffset(section);

    const handleScroll = (event: Event) => {
      if (window.scrollY > sticky - sectionOffset) {
        header.classList.add('sticky');
      } else {
        header.classList.remove('sticky');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [section]);

  return (
    <div
      className={`${styles.wrapper} ${styles.wrapper}`}
      id={`${section}-header`}
    >
      <h2>{section}</h2>
    </div>
  );
};

export default SectionHeader;
