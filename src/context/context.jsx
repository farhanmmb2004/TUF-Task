import React, { createContext, useState } from 'react';
const MyContext = createContext();
export const ContextProvider = ({ children }) => {
  const [data, setdata] = useState('farhan');

  return (
    <MyContext.Provider value={{data}}>
      {children}
    </MyContext.Provider>
  );
};

export default MyContext;
