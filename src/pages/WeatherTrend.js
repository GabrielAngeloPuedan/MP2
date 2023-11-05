import React, { useState, useEffect } from 'react';
import {
  SearchBar,
  TimeandLoc,
  TempAndDetails,
  WeatherForecast,
} from '../components';
import getFormattedWeatherData from '../WeatherJS/AllWeatherData';

export const WeatherTrend = () => {
  const [city, setCity] = useState('');
  const [units] = useState('metric');
  const [weather, setWeather] = useState(null);

  const fetchWeatherData = async (location) => {
    try {
      const data = await getFormattedWeatherData({ q: location, units });
      setWeather(data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
      setWeather(null);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      if (!city) {
        if (navigator.geolocation) {
          await getLocation();
        } else {
          console.log('Geolocation is not supported by this browser.');
          setWeather(null);
        }
      } else {
        await fetchWeatherData(city);
      }
    };

    const getLocation = async () => {
      try {
        const position = await new Promise((resolve, reject) => {
          navigator.geolocation.getCurrentPosition(resolve, reject, {
            timeout: 10000, // 10 seconds timeout
          });
        });

        const { latitude, longitude } = position.coords;
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=1fa9ff4126d95b8db54f3897a208e91c`
        );
        const data = await response.json();
        const location = data.name;
        setCity(location);
        fetchWeatherData(location);
      } catch (error) {
        console.error('Error getting current location or weather:', error);
        setWeather(null);
      }
    };

    fetchData();
  }, [city, units, fetchWeatherData, getLocation]); // Include fetchWeatherData and getLocation in the dependency array

  const handleSearch = (newCity) => {
    setCity(newCity);
  };

  return (
    <div className="mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 shadow-xl shadow-gray-400">
      <SearchBar handleSearch={handleSearch} />
      {weather ? (
        <>
          <TimeandLoc weather={weather} />
          <TempAndDetails weather={weather} />
          <WeatherForecast
            title="hourly forecast"
            items={weather.hourly}
          />
          <WeatherForecast
            title="weekly forecast"
            items={weather.daily}
          />
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};
