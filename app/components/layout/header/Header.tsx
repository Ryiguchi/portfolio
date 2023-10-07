import Link from 'next/link';

import Nav from './Nav';
import SocialLinks from './SocialLinks';

import type { FC } from 'react';

import styles from './Header.module.sass';

const navItems = [
  { text: 'About me', id: 'about' },
  { text: 'My Projects', id: 'projects' },
  { text: 'Certificates', id: 'certificates' },
];

const Header: FC = () => {
  return (
    <header className={styles.header}>
      <div>
        <div className={styles.text}>
          <h1>
            <Link href={'/admin'}>Ryan Iguchi</Link>
          </h1>
          <h2>Full Stack Web Developer</h2>
          <p>
            I create interactive and robust web applications, leveraging both
            client and server-side technologies to deliver seamless user
            experiences.
          </p>
        </div>
        <Nav navItems={navItems} />
      </div>
      <SocialLinks />
    </header>
  );
};

export default Header;
