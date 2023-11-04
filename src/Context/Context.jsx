import  { createContext } from 'react';


export const AuthContext = createContext(null);

const Context = ({ children }) => {
  
  const values = {
    name:'akash'
  }
  return (
    <AuthContext.Provider value={values}>
      {children}
    </AuthContext.Provider>
  );
};

export default Context;
