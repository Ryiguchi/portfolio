export interface IUser {
  name: string;
  password: string;
  id: string;
}

export interface ICertificateData {
  date: string;
  title: string;
  issuer: string;
  duration: string;
  description: string;
  skills: string[];
  url: string;
}

export interface IAboutData {
  text: string[];
}

export interface IProjectData {
  image: string;
  title: string;
  description: string;
  skills: string[];
  url: string;
}

export interface IProjectDataOptional {
  image?: string;
  title?: string;
  description?: string;
  skills?: string[];
  url?: string;
}
