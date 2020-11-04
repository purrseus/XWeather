/**
 * @format
 */

import React, { FC, useState } from 'react';
import { ForecastInterface } from 'api/interface';

interface Props {
  children: JSX.Element;
}

export const ForecastContext = React.createContext<null | any>(null);

export const ForecastProvider: FC<Props> = ({ children }: Props) => {
  const [weatherForecast, setWeatherForecast] = useState<
    ForecastInterface | {}
  >({});

  return (
    <ForecastContext.Provider value={{ weatherForecast, setWeatherForecast }}>
      {children}
    </ForecastContext.Provider>
  );
};
