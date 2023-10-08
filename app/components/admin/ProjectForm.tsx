import { useRef } from 'react';

import { formatToArray } from '@/app/lib/utils/helpers/admin.helpers';
import { validateData } from '@/app/lib/utils/helpers/data-validation.helpers';
import { postData } from '@/app/lib/utils/helpers/client.helpers';

import styles from './Form.module.sass';

import type { FC, FormEvent } from 'react';
import { IProjectData } from '@/app/lib/types/data.types';

const ProjectForm: FC = () => {
  const imageInputRef = useRef<HTMLInputElement | null>(null);
  const titleInputRef = useRef<HTMLInputElement | null>(null);
  const descriptionInputRef = useRef<HTMLTextAreaElement | null>(null);
  const skillsInputRef = useRef<HTMLInputElement | null>(null);
  const urlInputRef = useRef<HTMLInputElement | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const projectData = {
      image: imageInputRef.current?.value,
      title: titleInputRef.current?.value,
      description: descriptionInputRef.current?.value,
      skills: formatToArray(skillsInputRef.current?.value),
      url: urlInputRef.current?.value,
    };

    if (!validateData(projectData)) {
      TODO: console.log('Invalid Input!');
      return;
    }

    const response = await postData(
      '/api/content/project',
      projectData as IProjectData
    );

    TODO: response.ok
      ? console.log('Login successful')
      : console.log('Login successful');
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
