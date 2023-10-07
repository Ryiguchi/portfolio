'use client';

import { useEffect, useRef, useState } from 'react';

import type { FC } from 'react';

import styles from './Nav.module.sass';

type NavProps = {
  navItems: {
    text: string;
    id: string;
  }[];
};

const Nav: FC<NavProps> = ({ navItems }) => {
  const [currentSection, setCurrentSection] = useState('about');
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const elementsToObserve = [
      document.getElementById('about'),
      document.getElementById('projects'),
      document.getElementById('certificates'),
    ];

    if (!elementsToObserve || elementsToObserve.length !== 3) return;

    const options = {
      rootMargin: '-150px',
      threshold: 0.1,
    };

    const callback: IntersectionObserverCallback = entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setCurrentSection(entry.target.id);
        }
        if (entry.target.id === 'about' && !entry.isIntersecting) {
          setCurrentSection('projects');
        }
      });
    };

    observerRef.current = new IntersectionObserver(callback, options);

    elementsToObserve.forEach(element => {
      if (element && observerRef.current) {
        observerRef.current.observe(element);
      }
    });

    return () => {
      observerRef.current?.disconnect();
    };
  }, []);

  const handleScrollToSection = (id: string) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setCurrentSection(id);
    }
  };

  return (
    <nav className={styles.nav}>
      <ul>
        {navItems.map(item => (
          <li key={item.id} onClick={() => handleScrollToSection(item.id)}>
            <a>
              <span
                className={
                  item.id === currentSection ? styles.selected_line : ''
                }
              ></span>
              <span
                className={
                  item.id === currentSection ? styles.selected_item : ''
                }
              >
                {item.text}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
