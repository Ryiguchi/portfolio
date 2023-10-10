import SectionHeader from '../../common/SectionHeader';
import Course from './Course';

import '../section.sass';

import type { FC } from 'react';

type Props = {
  certs: ICertificateData[];
};

const CertSection: FC<Props> = ({ certs }) => {
  return (
    <section className="section" id="certificates">
      <SectionHeader section="certificates" />
      <div className="section_items">
        {certs.map(cert => (
          <Course key={cert.title} cert={cert} />
        ))}
      </div>
    </section>
  );
};

export default CertSection;
