import styles from './Nav.module.sass';

import type { FC } from 'react';

type NavProps = {
  navItems: {
    text: string;
    id: string;
  }[];
  handleScrollToSection(id: string): void;
  currentSection: string;
};

const Nav: FC<NavProps> = ({
  navItems,
  handleScrollToSection,
  currentSection,
}) => {
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
