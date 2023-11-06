import React, { useState, useEffect } from 'react';

export const WNPopular = () => {
  const [value, setValue] = useState([]);

  const api = async () => {
    try {
      let response = await fetch(
        'https://newsdata.io/api/1/news?apikey=pub_3242940853309f42bef3fea891d5a2ab05644&image=1&category=world&language=en'
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
    <div className="flex-shrink max-w-full w-full lg:w-1/3 lg:pr-8 lg:pt-14 lg:pb-8 order-first">
      <div className="w-full bg-white">
        <div className="mb-6">
          <div className="p-4 bg-gray-100">
            <h2 className="text-lg font-bold">Top Read</h2>
          </div>
          <ul className="post-number">
            {value.slice(0, 10).map((a, key) => (
              <li
                className="border-b border-gray-100 hover:bg-gray-50"
                key={key}
              >
                <a
                  className="text-lg font-bold px-6 py-3 flex flex-row items-center"
                  href={a.title}
                >
                  {a.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
