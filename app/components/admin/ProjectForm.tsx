import { useContext, useRef } from 'react';

import { formatToArray } from '@/app/lib/utils/helpers/admin.helpers';
import { validateData } from '@/app/lib/utils/helpers/data-validation.helpers';
import { getContentNotification } from '@/app/lib/utils/helpers/notification.helpers';
import { postData } from '@/app/lib/utils/helpers/client.helpers';

import NotificationContext from '@/store/notification.context';

import styles from './Form.module.sass';

import type { FC, FormEvent } from 'react';
import { ERequestStatus } from '@/types/enums.types';

const ProjectForm: FC = () => {
  const { setNotification } = useContext(NotificationContext);

  const imageInputRef = useRef<HTMLInputElement | null>(null);
  const titleInputRef = useRef<HTMLInputElement | null>(null);
  const descriptionInputRef = useRef<HTMLTextAreaElement | null>(null);
  const skillsInputRef = useRef<HTMLInputElement | null>(null);
  const urlInputRef = useRef<HTMLInputElement | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setNotification(getContentNotification(ERequestStatus.PENDING));

    const projectData = {
      image: imageInputRef.current?.value,
      title: titleInputRef.current?.value,
      description: descriptionInputRef.current?.value,
      skills: formatToArray(skillsInputRef.current?.value),
      url: urlInputRef.current?.value,
    };

    if (!validateData(projectData)) {
      setNotification(
        getContentNotification(ERequestStatus.ERROR, 'Invalid Data')
      );
      return;
    }

    await postData(
      '/api/content/project',
      projectData as IProjectData,
      setNotification
    );
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div>
        <label htmlFor="image">Image URL</label>
        <input ref={imageInputRef} type="text" id="image" />
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
