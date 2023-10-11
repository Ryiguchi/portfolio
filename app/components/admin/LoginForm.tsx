'use client';

import { useContext, useEffect, useRef, useState } from 'react';
import { signIn, useSession } from 'next-auth/react';

import { postData } from '@/app/lib/utils/helpers/postData.helpers';

import styles from './Form.module.sass';

import type { FC, FormEvent } from 'react';
import NotificationContext from '@/store/notification.context';
import { getContentNotification } from '@/app/lib/utils/helpers/notification.helpers';
import { EProviders, ERequestStatus } from '@/types/enums.types';
import { ZUserDataValidator } from '@/types/zod';
import { z } from 'zod';

const LoginForm: FC = () => {
  const { setNotification } = useContext(NotificationContext);

  const [isSignin, setIsSignin] = useState(true);
  const nameInputRef = useRef<HTMLInputElement | null>(null);
  const passwordInputRef = useRef<HTMLInputElement | null>(null);

  const { data: session } = useSession();

  // If active session, set state to determine if signIn or createUser
  useEffect(() => {
    session ? setIsSignin(false) : setIsSignin(true);
  }, [session]);

  const submitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const name = nameInputRef.current?.value;
    const password = passwordInputRef.current?.value;

    const userData = { name, password };

    try {
      const userDataParsed = ZUserDataValidator.parse(userData);

      if (isSignin) {
        const result = await signIn(EProviders.CREDENTIALS, {
          redirect: false,
          ...userDataParsed,
        });

        if (result?.ok) {
          setNotification(getContentNotification(ERequestStatus.SUCCESS));
          return;
        } else {
          throw new Error(result?.error ? result.error : undefined);
        }
      }

      if (!isSignin) {
        postData('api/user', userDataParsed, setNotification);
        return;
      }
    } catch (error: any) {
      setNotification(
        getContentNotification(
          ERequestStatus.ERROR,
          error instanceof z.ZodError ? error.issues[0].message : error.message
        )
      );
    }
  };

  return (
    <form onSubmit={submitHandler} className={styles.form}>
      <div>
        <label htmlFor="name">Name</label>
        <input ref={nameInputRef} type="text" id="name" />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input ref={passwordInputRef} type="password" id="password" />
      </div>
      <button>{isSignin ? 'login' : 'add user'}</button>
    </form>
  );
};

export default LoginForm;
