'use client';

import { useRef } from 'react';

import { formatToArray } from '@/app/lib/utils/helpers/admin.helpers';

import styles from './Form.module.sass';

import type { FC, FormEvent } from 'react';
import { postData } from '@/app/lib/utils/helpers/client.helpers';
import { validateData } from '@/app/lib/utils/helpers/data-validation.helpers';

const AboutForm: FC = () => {
  const textInputRef = useRef<HTMLTextAreaElement | null>(null);

  const submitAboutForm = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const text = textInputRef.current?.value;

    const aboutData = { text: formatToArray(text) };

    if (!validateData(aboutData)) {
      TODO: console.log('Invalid text');
      return;
    }

    const response = await postData('api/content/about', aboutData);

    response.ok ? console.log('success') : console.log('failed');
  };

  return (
    <form onSubmit={submitAboutForm} className={styles.form}>
      <h2>{`Separate paragraphs with a "<p>"`}</h2>
      <div>
        <label htmlFor="text">Description</label>
        <textarea ref={textInputRef} id="text" rows={20} />
      </div>
      <button>add</button>
    </form>
  );
};

export default AboutForm;
