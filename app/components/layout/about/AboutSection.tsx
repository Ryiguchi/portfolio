import type { FC } from 'react';
import styles from './AboutSection.module.sass';

type Props = {
  text: string[];
};

const AboutSection: FC<Props> = ({ text }) => {
  console.log(text);
  return (
    <section className={styles.about_section} id="about">
      {text.map(par => (
        <p key={par.substring(0, 10)}>{par}</p>
      ))}
    </section>
  );
};

export default AboutSection;
