import React, { useState, useEffect } from 'react';

import getFormattedWeatherData from '../components/Weather Trends/AllWeatherData/AllWeatherData';
import { SearchBar } from '../components/Weather Trends/SearchBar';
import { TempAndDetails } from '../components/Weather Trends/TempAndDetails';
import { TimeandLoc } from '../components/Weather Trends/TimeandLoc';
import { WeatherForecast } from '../components/Weather Trends/WeatherForecast';
import { WeatherPHNews } from '../components/Weather Trends/WeatherPHNews';
import { WeatherWNews } from '../components/Weather Trends/WeatherWNews';

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
    <main>
      <div className="mx-auto max-w-screen-md mt-4">
        <div className="bg-slate-950 bg-opacity-75 backdrop-filter backdrop-blur-lg rounded-md p-6 shadow-2xl">
          <SearchBar handleSearch={handleSearch} />
          <div className="mt-6 space-y-6 text-black">
            <TimeandLoc weather={weather} />
            <TempAndDetails weather={weather} />
            <div className="text-white">
              <WeatherForecast
                title="hourly forecast"
                items={weather.hourly}
              />
            </div>
            <div className="text-white">
              <WeatherForecast
                title="weekly forecast"
                items={weather.daily}
              />
            </div>
          </div>
        </div>
      </div>
      <WeatherWNews />
      <WeatherPHNews />
    </main>
  );
};
