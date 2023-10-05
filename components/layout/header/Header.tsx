'use client';

import { useState, type FC } from 'react';
import styles from './Header.module.sass';
import Nav from './Nav';
import SocialLinks from './SocialLinks';

const navItems = [
  { text: 'About me', id: 'about' },
  { text: 'My Projects', id: 'projects' },
  { text: 'Certificates', id: 'certificates' },
  { text: 'Contact me', id: 'contact' },
];

const Header: FC = () => {
  const [currentSection, setCurrentSection] = useState('');
  const handleScrollToSection = (id: string) => {
    console.log(id);
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      setCurrentSection(id);
    }
  };
  return (
    <header className={styles.header}>
      <div>
        <div className={styles.text}>
          <h1>
            <a>Ryan Iguchi</a>
          </h1>
          <h2>Full Stack Web Developer</h2>
          <p>
            I create interactive and robust web applications, leveraging both
            client and server-side technologies to deliver seamless user
            experiences.
          </p>
        </div>
        <Nav
          navItems={navItems}
          handleScrollToSection={handleScrollToSection}
          currentSection={currentSection}
        />
      </div>
      <SocialLinks />
    </header>
  );
};

export default Header;
