import { useContext, useRef } from 'react';

import { getContentNotification } from '@/lib/helpers/notification.helpers';
import { postData } from '@/lib/helpers/postData.helpers';

import NotificationContext from '@/lib/store/notification.context';

import styles from './Form.module.sass';

import type { FC, FormEvent } from 'react';
import { ERequestStatus } from '@/lib/types/enums.types';
import { ZProjectDataValidator } from '@/lib/types/zod';

const ProjectForm: FC = () => {
  const { setNotification } = useContext(NotificationContext);

  const mobileImageInputRef = useRef<HTMLInputElement | null>(null);
  const desktopImageInputRef = useRef<HTMLInputElement | null>(null);
  const titleInputRef = useRef<HTMLInputElement | null>(null);
  const descriptionInputRef = useRef<HTMLTextAreaElement | null>(null);
  const skillsInputRef = useRef<HTMLInputElement | null>(null);
  const urlInputRef = useRef<HTMLInputElement | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setNotification(getContentNotification(ERequestStatus.PENDING));

    const projectData = {
      mobileImg: mobileImageInputRef.current?.value,
      desktopImg: desktopImageInputRef.current?.value,
      title: titleInputRef.current?.value,
      description: descriptionInputRef.current?.value,
      skills: skillsInputRef.current?.value,
      url: urlInputRef.current?.value,
    };

    try {
      const projectDataParsed = ZProjectDataValidator.parse(projectData);

      postData('/api/content/project', projectDataParsed, setNotification);
    } catch (error: any) {
      setNotification(
        getContentNotification(ERequestStatus.ERROR, error.issues[0].message)
      );
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div>
        <label htmlFor="image">Mobile image name</label>
        <input ref={mobileImageInputRef} type="text" id="image" />
      </div>
      <div>
        <label htmlFor="image">Desktop image name</label>
        <input ref={desktopImageInputRef} type="text" id="image" />
      </div>
      <div>
        <label htmlFor="title">Title</label>
        <input ref={titleInputRef} type="text" id="title" />
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

export default ProjectForm;
