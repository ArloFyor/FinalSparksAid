//import { View, Text } from 'react-native'
import React , { createContext, useState, useContext } from 'react'

const RegistrationContext = createContext();

export const RegistrationProvider = ({ children }) => {
  const [registrationValues, setRegistrationValues] = useState({});

  return (
    <RegistrationContext.Provider value={{ registrationValues, setRegistrationValues }}>
      {children}
    </RegistrationContext.Provider>
  );
};

export const useRegistrationContext = () => useContext(RegistrationContext);