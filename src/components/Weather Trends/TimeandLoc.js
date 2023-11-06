import React from 'react';
import { formatToLocalTime } from './AllWeatherData/AllWeatherData';
import './TimeandLoc.css';

export const TimeandLoc = ({ weather: { dt, timezone, name, country } }) => {
  const formattedTime = formatToLocalTime(dt, timezone);

  return (
    <div className="glassy-container">
      <div className="flex items-center justify-center my-6">
        <p className="text-white text-xl font-extralight">{formattedTime}</p>
      </div>

      <div className="flex items-center justify-center my-3">
        <p className="text-white text-3xl font-medium">{`${name}, ${country}`}</p>
      </div>
    </div>
  );
};
