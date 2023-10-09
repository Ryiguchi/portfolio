import { useContext, useRef } from 'react';

import { formatToArray } from '@/app/lib/utils/helpers/admin.helpers';
import { validateData } from '@/app/lib/utils/helpers/data-validation.helpers';
import { postData } from '@/app/lib/utils/helpers/client.helpers';
import { getContentNotification } from '@/app/lib/utils/helpers/notification.helpers';

import NotificationContext from '@/store/notification.context';

import styles from './Form.module.sass';

import type { FC, FormEvent } from 'react';
import { ERequestStatus } from '@/types/enums.types';

const CertForm: FC = () => {
  const { setNotification } = useContext(NotificationContext);

  const dateInputRef = useRef<HTMLInputElement | null>(null);
  const titleInputRef = useRef<HTMLInputElement | null>(null);
  const issuerInputRef = useRef<HTMLInputElement | null>(null);
  const durationInputRef = useRef<HTMLInputElement | null>(null);
  const descriptionInputRef = useRef<HTMLTextAreaElement | null>(null);
  const skillsInputRef = useRef<HTMLInputElement | null>(null);
  const urlInputRef = useRef<HTMLInputElement | null>(null);

  const submitCertForm = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setNotification(getContentNotification(ERequestStatus.PENDING));

    const date = dateInputRef.current?.value;
    const title = titleInputRef.current?.value;
    const issuer = issuerInputRef.current?.value;
    const duration = durationInputRef.current?.value;
    const description = descriptionInputRef.current?.value;
    const skills = skillsInputRef.current?.value;
    const url = urlInputRef.current?.value;

    const certFormData = {
      date,
      title,
      issuer,
      duration,
      description,
      skills: formatToArray(skills),
      url,
    };

    if (!validateData(certFormData)) {
      setNotification(
        getContentNotification(ERequestStatus.ERROR, 'Invalid Data')
      );
      return;
    }

    await postData(
      'api/content/cert',
      certFormData as ICertificateData,
      setNotification
    );
  };

  // const notification = getContentNotification(requestStatus);

  return (
    <form onSubmit={submitCertForm} className={styles.form}>
      <div>
        <label htmlFor="date">Date</label>
        <input ref={dateInputRef} type="text" id="date" />
      </div>
      <div>
        <label htmlFor="title">Title</label>
        <input ref={titleInputRef} type="text" id="title" />
      </div>
      <div>
        <label htmlFor="issuer">Issuer</label>
        <input ref={issuerInputRef} type="text" id="issuer" />
      </div>
      <div>
        <label htmlFor="duration">Duration</label>
        <input ref={durationInputRef} type="text" id="duration" />
      </div>
      <div>
        <label htmlFor="description">Description</label>
        <textarea ref={descriptionInputRef} id="description" rows={5} />
      </div>
      <div>
        <label htmlFor="skills">Skills</label>
        <input ref={skillsInputRef} type="text" id="skills" />
      </div>
      <div>
        <label htmlFor="url">Url</label>
        <input ref={urlInputRef} type="text" id="url" />
      </div>
      <button>add</button>
    </form>
  );
};

export default CertForm;
