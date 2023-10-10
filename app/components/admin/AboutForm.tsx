'use client';

import { useContext, useRef } from 'react';

import { formatToArray } from '@/app/lib/utils/helpers/admin.helpers';
import { getContentNotification } from '@/app/lib/utils/helpers/notification.helpers';
import { validateData } from '@/app/lib/utils/helpers/data-validation.helpers';
import { postData } from '@/app/lib/utils/helpers/postData.helpers';

import NotificationContext from '@/store/notification.context';

import styles from './Form.module.sass';

import type { FC, FormEvent } from 'react';
import { ERequestStatus } from '@/types/enums.types';

const AboutForm: FC = () => {
  const { setNotification } = useContext(NotificationContext);

  const textInputRef = useRef<HTMLTextAreaElement | null>(null);

  const submitAboutForm = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setNotification(getContentNotification(ERequestStatus.PENDING));

    const text = textInputRef.current?.value;

    const aboutData = { text: formatToArray(text) };

    if (!validateData(aboutData)) {
      setNotification(
        getContentNotification(ERequestStatus.ERROR, 'Invalid Data')
      );
      return;
    }

    postData('api/content/about', aboutData, setNotification);
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
