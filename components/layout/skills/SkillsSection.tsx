import type { FC } from 'react';
import Course from './Course';

const SkillsSection: FC = () => {
  return (
    <section className="section" id="certificates">
      <div className="section_items">
        <Course />
        <Course />
        <Course />
      </div>
    </section>
  );
};

export default SkillsSection;
