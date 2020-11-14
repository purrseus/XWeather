/**
 * @format
 */

import React, { FC, useState } from 'react';
import { OneCallInterface } from 'types/interface';

interface Props {
  children: JSX.Element;
}

export const ForecastContext = React.createContext<null | any>(null);

export const ForecastProvider: FC<Props> = ({ children }: Props) => {
  const [weatherForecast, setWeatherForecast] = useState<OneCallInterface | {}>(
    {}
  );

  return (
    <ForecastContext.Provider value={{ weatherForecast, setWeatherForecast }}>
      {children}
    </ForecastContext.Provider>
  );
};
