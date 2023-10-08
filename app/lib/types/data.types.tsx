export interface IUser {
  name: string;
  password: string;
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

export type IAboutData = {
  text: string[];
};

export interface IProjectData {
  image: string;
  title: string;
  description: string;
  skills: string[];
  url: string;
}

export interface IContentData {
  certs: ICertificateData[];
  about: string[];
  projects: IProjectData[];
}
