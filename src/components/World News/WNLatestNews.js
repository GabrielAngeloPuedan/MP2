import React, { useState, useEffect } from 'react';

export const WNLatestNews = () => {
  const [value, setValue] = useState([]);

  const api = async () => {
    try {
      let response = await fetch(
        'https://newsdata.io/api/1/news?apikey=pub_32487a2ae4b5d12ffd1e5c6a7d60bc91f8f78&image=1&category=politics&language=en'
      );
      let result = await response.json();
      if (result.results && result.results.length > 0) {
        setValue(result.results);
      } else {
        throw new Error('No results found');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    api();
  }, []);

  return (
    <div>
      <div className="flex-shrink max-w-full w-full px-3 pb-5">
        {value.slice(0, 1).map((a, key) => (
          <div
            className="relative hover-img max-h-98 overflow-hidden"
            key={key}
          >
            <a href={a.link}>
              <img
                className="max-w-full w-full mx-auto h-auto"
                src={a.image_url}
                alt={a.title}
              />
            </a>
            <div className="absolute px-5 pt-8 pb-5 bottom-0 w-full bg-gradient-cover">
              <a href={a.url}>
                <h2 className="text-3xl font-bold capitalize text-white mb-3">
                  {a.title}
                </h2>
              </a>
              <p className="text-gray-100 hidden sm:inline-block">
                {a.description}
              </p>
              <div className="pt-2">
                <a
                  className="text-gray-100 
                "
                  href={a.link}
                >
                  <div className="inline-block h-3 border-l-2 border-red-600 mr-2"></div>
                  Read more
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
