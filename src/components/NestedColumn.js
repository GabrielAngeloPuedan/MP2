import React, { useState, useEffect } from 'react';
import { NestedColum2 } from '../components';

export const NestedColumn = () => {
  const [value, setValue] = useState([]);

  const api = async () => {
    try {
      let response = await fetch(
        'https://gnews.io/api/v4/top-headlines?category=sports&lang=en&country=ph&max=10&apikey=f9f38c9e7d539a4322386cf01130f046'
      );
      let result = await response.json();
      if (result.articles && result.articles.length > 0) {
        setValue(result.articles);
      } else {
        throw new Error('No articles found');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    api();
  }, []);
  return (
    <main className="xl:container mx-auto px-3 sm:px-4 xl:px-2">
      {value.slice(0, 1).map((a, key) => (
        <div
          className="flex flex-row flex-wrap"
          key={key}
        >
          <div className="flex-shrink max-w-full w-full lg:w-2/3 overflow-hidden">
            <div className="w-full py-3">
              <h2 className="text-gray-800 text-2xl font-bold">
                <span className="inline-block h-5 border-l-3 border-red-600 mr-2"></span>
                Sport-Top Headlines
              </h2>
            </div>

            <div className="flex flex-row flex-wrap -mx-3">
              <div className="flex-shrink max-w-full w-full px-3 pb-5">
                <div className="relative hover-img max-h-98 overflow-hidden">
                  <a href={a.title}>
                    <img
                      className="max-w-full w-full mx-auto h-auto"
                      src={a.image}
                      alt={a.title}
                    />
                  </a>
                  <div className="absolute px-5 pt-8 pb-5 bottom-0 w-full bg-gradient-cover">
                    <a href="/">
                      <h2 className="text-3xl font-bold capitalize text-white mb-3">
                        {a.title}
                      </h2>
                    </a>
                    <p className="text-gray-100 hidden sm:inline-block">
                      {a.description}
                    </p>

                    <div className="pt-2">
                      <a
                        className="text-gray-100"
                        href={a.url}
                      >
                        <span className="inline-block h-3 border-l-2 border-red-600 mr-2"></span>
                        Read more
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <NestedColum2 />
          </div>
        </div>
      ))}
    </main>
  );
};
