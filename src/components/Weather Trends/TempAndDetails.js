import React from 'react';
import { WiThermometer, WiRaindrop, WiStrongWind } from 'react-icons/wi';
import { iconUrlFromCode } from './AllWeatherData/AllWeatherData';

export const TempAndDetails = ({
  weather: { temp, icon, speed, humidity, feels_like },
}) => {
  return (
    <div className="rounded-lg border-2 border-blue-500 p-5 bg-white bg-opacity-25">
      <div className="flex items-center justify-between text-white py-3 space-x-4">
        <img
          src={iconUrlFromCode(icon)}
          alt=""
          className="w-20"
        />
        <p className="text-5xl">{`${Math.round(temp)}°`}</p>
        <div className="flex flex-col space-y-2">
          <div className="flex font-light text-sm items-center justify-center">
            <WiThermometer
              size={25}
              className="mr-1"
            />
            Feels like:
            <span className="font-medium ml-1">{`${Math.round(
              feels_like
            )}°`}</span>
          </div>
          <div className="flex font-light text-sm items-center justify-center">
            <WiRaindrop
              size={25}
              className="mr-1"
            />
            Humidity:
            <span className="font-medium ml-1">{`${Math.round(
              humidity
            )}%`}</span>
          </div>
          <div className="flex font-light text-sm items-center justify-center">
            <WiStrongWind
              size={25}
              className="mr-1"
            />
            Wind Speed:
            <span className="font-medium ml-1">{`${Math.round(
              speed
            )} km/h`}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
