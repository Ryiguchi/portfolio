import type { FC } from 'react';
import { MdArrowForward } from 'react-icons/md';

import styles from './SectionLink.module.sass';

type SectionLinkProps = {
  text: string;
  url: string;
};

const SectionLink: FC<SectionLinkProps> = ({ text, url }) => {
  return (
    <a href={url}>
      <div className={styles.wrapper}>
        <h3>{text}</h3>
        <MdArrowForward className={styles.icon} />
      </div>
    </a>
  );
};

export default SectionLink;
