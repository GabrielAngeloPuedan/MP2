import React from 'react';
import { iconUrlFromCode } from './AllWeatherData/AllWeatherData';

export const WeatherForecast = ({ title, items }) => {
  return (
    <div className="rounded-lg border-2 border-blue-500 p-5 bg-white bg-opacity-25">
      <div className="flex items-center justify-start mt-6">
        <p className="text-white font-medium uppercase">{title}</p>
      </div>
      <hr className="my-2" />

      <div className="flex flex-row items-center justify-between text-white space-x-4">
        {items?.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center"
          >
            <p className="font-light text-sm">{item.title}</p>
            <img
              src={iconUrlFromCode(item.icon)}
              className="w-12 my-1"
              alt=""
            />
            <p className="font-medium">{`${item.temp.toFixed()}°`}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
