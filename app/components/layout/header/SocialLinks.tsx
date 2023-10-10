import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

import styles from './SocialLinks.module.sass';

import type { FC } from 'react';

const SocialLinks: FC = () => {
  return (
    <div className={styles.social_list}>
      <ul>
        <li>
          <a
            aria-label="Visit my Github page"
            href="https://github.com/Ryiguchi/portfolio"
            target="_blank"
          >
            <FaGithub className={styles.icon} />
          </a>
        </li>
        <li>
          <a
            aria-label="View my LinkedIn profile"
            href="https://www.linkedin.com/in/ryan-iguchi/"
            target="_blank"
          >
            <FaLinkedin className={styles.icon} />
          </a>
        </li>
        <li>
          <a
            aria-label="Send me an Email"
            href="mailto: ryan.iguchi1@gmail.com"
            target="_blank"
          >
            <FaEnvelope className={styles.icon} />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialLinks;
