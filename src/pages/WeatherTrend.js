import React, { useState, useEffect } from 'react';
import {
  SearchBar,
  TimeandLoc,
  TempAndDetails,
  WeatherForecast,
  WeatherNews,
} from '../components';
import getFormattedWeatherData from '../WeatherJS/AllWeatherData';

export const WeatherTrend = () => {
  const [query, setQuery] = useState('Manila');
  const [units] = useState('metric');
  const [weather, setWeather] = useState({});

  useEffect(() => {
    const fetchWeather = async (locationQuery) => {
      try {
        const data = await getFormattedWeatherData({ q: locationQuery, units });
        setWeather(data);
      } catch (error) {
        console.error('Error fetching weather data:', error);
        setWeather({});
      }
    };

    fetchWeather(query);
  }, [query, units]);

  const handleSearch = (newQuery) => {
    setQuery(newQuery);
  };

  return (
    <div className="mx-auto max-w-screen-md mt-4">
      <div className="bg-slate-950 bg-opacity-75 backdrop-filter backdrop-blur-lg rounded-md p-6 shadow-2xl">
        <SearchBar handleSearch={handleSearch} />
        <div className="mt-6 space-y-6 text-black">
          <TimeandLoc weather={weather} />
          <TempAndDetails weather={weather} />

          <div className="glassy-card">
            <h2 className="text-white text-xl mb-4">Hourly Forecast</h2>
            <div className="text-white">
              <WeatherForecast
                title="hourly forecast"
                items={weather.hourly}
              />
            </div>
          </div>

          <div className="glassy-card">
            <h2 className="text-white text-xl mb-4">Weekly Forecast</h2>
            <div className="text-white">
              <WeatherForecast
                title="weekly forecast"
                items={weather.daily}
              />
            </div>
          </div>
        </div>
      </div>
      <WeatherNews />
    </div>
  );
};
