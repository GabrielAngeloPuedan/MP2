import React from 'react';
import { formatToLocalTime } from '../WeatherJS/AllWeatherData';

export const TimeandLoc = ({ weather: { dt, timezone, name, country } }) => {
  // Assuming formatToLocalTime is correctly implemented
  const formattedTime = formatToLocalTime(dt, timezone);

  return (
    <div>
      <div className="flex items-center justify-center my-6">
        <p className="text-white text-xl font-extralight">{formattedTime}</p>
      </div>

      <div className="flex items-center justify-center my-3">
        <p className="text-white text-3xl font-medium">{`${name}, ${country}`}</p>
      </div>
    </div>
  );
};
