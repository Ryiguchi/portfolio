import ListTitle from '@/components/common/ListTitle';
import SkillsList from '@/components/common/SkillsList';
import type { FC } from 'react';
import styles from './Course.module.sass';

const Course: FC = () => {
  return (
    <div className="item">
      <div className="item_inside_wrapper">
        <div className={styles.date_wrapper}>
          <p>Sept &#8212; Oct 2022</p>
        </div>
        <div className="content">
          <div>
            <ListTitle title="Build Responsive Real-World Websites with HTML and CSS" />
            <h4>Udemy</h4>
          </div>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
          <SkillsList skills={['HTML', 'CSS']} />
        </div>
      </div>
      <div className="item_overlay"></div>
    </div>
  );
};

export default Course;
