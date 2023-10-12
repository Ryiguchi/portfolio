'use client';

import { useContext, useRef } from 'react';

import NotificationContext from '@/lib/store/notification.context';

import { getContentNotification } from '@/lib/helpers/notification.helpers';
import { postData } from '@/lib/helpers/postData.helpers';

import styles from './Form.module.sass';

import type { FC, FormEvent } from 'react';
import { ERequestStatus } from '@/lib/types/enums.types';
import { ZAboutDataValidator } from '@/lib/types/zod';

const AboutForm: FC = () => {
  const { setNotification } = useContext(NotificationContext);

  const textInputRef = useRef<HTMLTextAreaElement | null>(null);

  const submitAboutForm = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setNotification(getContentNotification(ERequestStatus.PENDING));

    const aboutData = {
      text: textInputRef.current?.value,
    };

    try {
      const aboutDataParsed = ZAboutDataValidator.parse(aboutData);

      postData('api/content/about', aboutDataParsed, setNotification);
    } catch (error: any) {
      setNotification(
        getContentNotification(ERequestStatus.ERROR, error.issues[0].message)
      );
    }
  };

  return (
    <form onSubmit={submitAboutForm} className={styles.form}>
      <h2>{`Separate paragraphs with "**"`}</h2>
      <div>
        <label htmlFor="text">Description</label>
        <textarea ref={textInputRef} id="text" rows={20} />
      </div>
      <button>add</button>
    </form>
  );
};

export default AboutForm;
