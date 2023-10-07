import { useRef } from 'react';

import type { FC, FormEvent } from 'react';

import styles from './Form.module.sass';
import { isProjectDataValid } from '@/app/lib/utils/helpers/data-validation.helpers';
import axios from 'axios';

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
      skills: skillsInputRef.current?.value.split('**'),
      url: urlInputRef.current?.value,
    };

    if (!isProjectDataValid(projectData)) {
      console.log('Invalid Input!');
      return;
    }

    try {
      const response = await axios.post('/api/content/project', projectData);
    } catch (error) {
      console.log('Error saving data!');
    }
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
