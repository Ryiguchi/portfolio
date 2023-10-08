import ListTitle from '@/app/components/common/ListTitle';
import SkillsList from '@/app/components/common/SkillsList';

import styles from './Course.module.sass';

import type { FC } from 'react';
import type { ICertificateData } from '@/app/lib/types/types';

type Props = {
  cert: ICertificateData;
};

const Course: FC<Props> = ({ cert }) => {
  return (
    <a href={cert.url} target="_blank">
      <div className="item">
        <div className="item_inside_wrapper">
          <div className={styles.date_wrapper}>
            <p>{cert.date}</p>
          </div>
          <div className="content">
            <div>
              <ListTitle title={cert.title} />
              <h4>{cert.issuer}</h4>
            </div>
            <p>{cert.description}</p>
            <SkillsList skills={cert.skills} />
          </div>
        </div>
        <div className="item_overlay"></div>
      </div>
    </a>
  );
};

export default Course;
