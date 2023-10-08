'use client';

import styles from './error.module.sass';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className={styles.wrapper}>
      <h2>There was a problem fetching the content for the page!</h2>
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
}
