import styles from './AboutSection.module.sass';

import type { FC } from 'react';

type Props = {
  text: string[];
};

const AboutSection: FC<Props> = ({ text }) => {
  return (
    <section className={styles.about_section} id="about">
      {text.map(par => (
        <p key={par.substring(0, 10)}>{par}</p>
      ))}
    </section>
  );
};

export default AboutSection;
