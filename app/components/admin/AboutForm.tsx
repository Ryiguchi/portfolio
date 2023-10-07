import { useRef } from 'react';
import axios from 'axios';

import type { FC, FormEvent } from 'react';

import styles from './Form.module.sass';
import { formatToArray } from '@/app/lib/utils/helpers/admin.helpers';

const AboutForm: FC = () => {
  const textInputRef = useRef<HTMLTextAreaElement | null>(null);
  const submitAboutForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const text = textInputRef.current?.value;

    if (!text || !text.trim().length) {
      console.log('Invalid text');
      return;
    }

    const textArray = formatToArray(text);

    try {
      const response = axios.post('/api/content/about', { text: textArray });
      console.log(response);
    } catch (error) {
      console.log('There was an error saving the content.');
    }
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
