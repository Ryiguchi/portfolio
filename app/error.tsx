'use client';

import styles from './error.module.sass';

import { FC } from 'react';

type Props = {
  error: Error & { digest?: string };
  reset: () => void;
};

const Error: FC<Props> = ({ error, reset }) => {
  return (
    <div className={styles.wrapper}>
      <h2>There was a problem fetching the content for the page!</h2>
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
};

export default Error;
