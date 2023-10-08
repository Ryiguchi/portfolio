import styles from './SkillsList.module.sass';

import type { FC } from 'react';

type SkillsListProps = {
  skills: string[];
};

const SkillsList: FC<SkillsListProps> = ({ skills }) => {
  return (
    <ul className={styles.skills_list}>
      {skills.map(skill => (
        <li key={skill} className={styles.skills}>
          {skill}
        </li>
      ))}
    </ul>
  );
};

export default SkillsList;
