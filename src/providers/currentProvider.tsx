import React, { useState } from 'react';

type Props ={
  children: JSX.Element,
};

export const CurrentContext = React.createContext<null | any>(null);

export const CurrentProvider = ({ children }: Props) => {
  const [currentWeather, setCurrentWeather] = useState({});
  return (
    <CurrentContext.Provider value={{ currentWeather, setCurrentWeather }}>
      {children}
    </CurrentContext.Provider>
  );
};