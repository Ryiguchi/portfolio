import styles from './Footer.module.sass';

import type { FC } from 'react';

const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <p>
        This page was built with <b>NextJS</b>, <b>Typescript</b>, <b>Zod</b>,
        <b> MongoDB</b> and
        <b> Sass</b>. The design is a replica of&nbsp;
        <a href="https://brittanychiang.com/#projects" target="_blank">
          Brittany Chiang&apos;s portfolio.
        </a>
      </p>
    </footer>
  );
};

export default Footer;
