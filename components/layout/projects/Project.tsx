import Image from 'next/image';
import type { FC } from 'react';

import SkillsList from '@/components/common/SkillsList';
import ListTitle from '@/components/common/ListTitle';

const Project: FC = () => {
  return (
    <div className="item">
      <div className="item_inside_wrapper">
        <div className="item_image_wrapper">
          <div className="item_image">
            <img src="/images/test.png"></img>
            {/* <Image
            src={'/images/test.png'}
            alt="Fox Notes"
            width={120}
            height={60}
          /> */}
          </div>
          di
        </div>
        <div className="content">
          <ListTitle title="Build a Spotify Connected App" />
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
          <SkillsList skills={['React', 'Express', 'MongoDB']} />
        </div>
      </div>
      <div className="item_overlay"></div>
    </div>
  );
};

export default Project;
