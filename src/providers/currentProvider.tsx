/**
 * @format
 */

import React, { FC, useState } from 'react';
import { CurrentWeatherInterface } from 'api/interface';

interface Props {
  children: JSX.Element;
}

export const CurrentContext = React.createContext<null | any>(null);

export const CurrentProvider: FC<Props> = ({ children }: Props) => {
  const [currentWeather, setCurrentWeather] = useState<
    CurrentWeatherInterface | {}
  >({});
  return (
    <CurrentContext.Provider value={{ currentWeather, setCurrentWeather }}>
      {children}
    </CurrentContext.Provider>
  );
};
