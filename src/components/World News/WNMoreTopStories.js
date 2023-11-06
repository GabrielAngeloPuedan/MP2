import React, { useState, useEffect } from 'react';

export const WNMoreTopStories = () => {
  const [value, setValue] = useState([]);

  const api = async () => {
    try {
      let response = await fetch(
        'https://newsdata.io/api/1/news?apikey=pub_3242940853309f42bef3fea891d5a2ab05644&image=1&language=en&category=tourism'
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
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-800 pb-4">More Stories</h2>
      </div>
      <div className="flex flex-wrap justify-center">
        {value.slice(0, 6).map((a, key) => (
          <div
            className="max-w-sm rounded overflow-hidden shadow-lg m-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4"
            key={key}
          >
            <img
              className="w-full"
              src={a.image_url}
              alt={a.title}
            />
            <a
              className="text-center"
              href={a.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {a.title}
            </a>
            <div className="px-6 py-4">
              <div className="font-bold text-xl px-2"></div>
              <p className="text-gray-700 text-base">{a.description}</p>
            </div>
            <div className="px-6 py-4">
              <a
                className="text-dark-100 
                "
                href={a.link}
              >
                <div className="inline-block h-3 border-l-2 border-red-600 mr-2"></div>
                Read more
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
