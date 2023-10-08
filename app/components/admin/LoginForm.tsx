'use client';

import { useEffect, useRef, useState } from 'react';
import { signIn, useSession } from 'next-auth/react';

import { validateData } from '@/app/lib/utils/helpers/data-validation.helpers';
import { postData } from '@/app/lib/utils/helpers/client.helpers';

import styles from './Form.module.sass';

import type { FC, FormEvent } from 'react';
import { IUser } from '@/app/lib/types/data.types';

const LoginForm: FC = () => {
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

    if (!validateData(userData)) {
      TODO: console.log('invalid Data');
    }

    if (isSignin) {
      const result = await signIn('credentials', {
        redirect: false,
        name,
        password,
      });

      TODO: result?.ok
        ? console.log('Login successful')
        : console.log('Login successful');
    } else {
      const response = await postData('api/user', {
        name,
        password,
      } as IUser);
      TODO: response.ok
        ? console.log('Login successful')
        : console.log('Login successful');
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
