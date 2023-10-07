import type { FC } from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import styles from './SocialLinks.module.sass';

const SocialLinks: FC = () => {
  return (
    <div className={styles.social_list}>
      <ul>
        <li>
          <a href="https://github.com/Ryiguchi/portfolio" target="_blank">
            <FaGithub className={styles.icon} />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/ryan-iguchi/" target="_blank">
            <FaLinkedin className={styles.icon} />
          </a>
        </li>
        <li>
          <a href="mailto: ryan.iguchi1@gmail.com" target="_blank">
            <FaEnvelope className={styles.icon} />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialLinks;
