/**
 * @format
 */

import React, { FC, useState } from 'react';
import { ForecastInterface } from 'api/interface';

interface Props {
  children: JSX.Element;
}

export const CurrentContext = React.createContext<null | any>(null);

export const CurrentProvider: FC<Props> = ({ children }: Props) => {
  const [currentWeather, setCurrentWeather] = useState<ForecastInterface | {}>(
    {}
  );
  return (
    <CurrentContext.Provider value={{ currentWeather, setCurrentWeather }}>
      {children}
    </CurrentContext.Provider>
  );
};
