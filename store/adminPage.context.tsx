import { createContext, useState } from 'react';
import type { Dispatch, SetStateAction } from 'react';

export enum EPages {
  PROJECT = 'project',
  CERT = 'cert',
  ABOUT = 'about',
}

type TAdminPageContext = {
  currentPage: EPages;
  setCurrentPage: Dispatch<SetStateAction<EPages>>;
};

const AdminPageContext = createContext<TAdminPageContext>({
  currentPage: EPages.PROJECT,
  setCurrentPage: () => {},
});

export const AdminPageContextProvider: TContextProvider = ({ children }) => {
  const [currentPage, setCurrentPage] = useState(EPages.PROJECT);

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
