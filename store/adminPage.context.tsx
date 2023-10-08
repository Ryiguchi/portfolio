import { createContext, useState } from 'react';
import type { Dispatch, FC, SetStateAction } from 'react';

export enum EPages {
  PROJECT = 'project',
  CERT = 'cert',
  SKILL = 'skill',
  ABOUT = 'about',
}

type AdminPageContextType = {
  currentPage: EPages;
  setCurrentPage: Dispatch<SetStateAction<EPages>>;
};

const AdminPageContext = createContext<AdminPageContextType>({
  currentPage: EPages.PROJECT,
  setCurrentPage: () => {},
});

type Props = {
  children: React.ReactNode;
};

export const AdminPageContextProvider: FC<Props> = ({ children }) => {
  const [currentPage, setCurrentPage] = useState(EPages.CERT);

  const context = {
    currentPage,
    setCurrentPage,
  };

  return (
    <AdminPageContext.Provider value={context}>
      {children}
    </AdminPageContext.Provider>
  );
};

export default AdminPageContext;
