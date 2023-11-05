// ... (existing code)

import React, { useState, useEffect } from 'react';
import {
  SearchBar,
  TimeandLoc,
  TempAndDetails,
  WeatherForecast,
} from '../components';
import getFormattedWeatherData from '../WeatherJS/AllWeatherData';

export const WeatherTrend = () => {
  const [city, setCity] = useState('Manila'); // Default city
  const [units] = useState('metric');
  const [weather, setWeather] = useState({});

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const data = await getFormattedWeatherData({ q: city, units });
        setWeather(data);
      } catch (error) {
        // Handle errors like invalid city, etc.
        console.error('Error fetching weather data:', error);
      }
    };

    fetchWeather();
  }, [city, units]);

  const handleSearch = (newCity) => {
    setCity(newCity);
  };

  return (
    <div className="mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 shadow-xl shadow-gray-400">
      <SearchBar handleSearch={handleSearch} />
      <TimeandLoc weather={weather} />
      <TempAndDetails weather={weather} />

      {weather && (
        <>
          <WeatherForecast
            title="hourly forecast"
            items={weather.hourly}
          />
          <WeatherForecast
            title="weekly forecast"
            items={weather.daily}
          />
        </>
      )}
    </div>
  );
};
