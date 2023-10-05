import type { FC } from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import styles from './SocialLinks.module.sass';

const SocialLinks: FC = () => {
  return (
    <div className={styles.social_list}>
      <ul>
        <li>
          <a>
            <FaGithub className={styles.icon} />
          </a>
        </li>
        <li>
          <a>
            <FaLinkedin className={styles.icon} />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialLinks;
