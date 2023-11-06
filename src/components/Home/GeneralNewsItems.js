import React, { useState, useEffect } from 'react';
// import SampleImage from '../assets/SampleNews.jpg';
// import { ForeignEx } from '../components/ForeignEx';

export const GeneralNewsItems = () => {
  const [value, setValue] = useState([]);

  const api = async () => {
    try {
      let response = await fetch(
        'https://gnews.io/api/v4/top-headlines?category=general&lang=en&country=us&max=10&apikey=6b3f02d607dce7c91d34940adcb2876e'
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
    <div className="bg-white">
      <div className="xl:container mx-auto px-3 sm:px-4 xl:px-2">
        <div className="flex flex-row flex-wrap">
          <div className="flex-shrink max-w-full w-full lg:w-2/3 overflow-hidden">
            <div className="w-full py-3">
              <h2 className="text-gray-800 text-2xl font-bold">
                <span className="inline-block h-5 border-l-3 border-red-600 mr-2"></span>
                More Headlines
              </h2>
            </div>
            <div className="flex flex-row flex-wrap -mx-3">
              {value.slice(0, 6).map((a, key) => (
                <div
                  className="flex-shrink max-w-full w-full sm:w-1/3 px-3 pb-3 pt-3 sm:pt-0 border-b-2 sm:border-b-0 border-dotted border-gray-100"
                  key={key}
                >
                  <div className="flex flex-row sm:block hover-img">
                    <a href={a.url}>
                      <img
                        className="max-w-full w-full mx-auto"
                        src={a.image}
                        alt="alt title"
                      />
                    </a>
                    <div className="py-0 sm:py-3 pl-3 sm:pl-0">
                      <h3 className="text-lg font-bold leading-tight mb-2">
                        <a href={a.url}>{a.title}</a>
                      </h3>
                      <p className="hidden md:block text-gray-600 leading-tight mb-1">
                        {a.description}
                      </p>
                      <a
                        className="text-gray-500"
                        href="/"
                      >
                        <span className="inline-block h-3 border-l-2 border-red-600 mr-2"></span>
                        Read more
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* <ForeignEx /> */}
        </div>
      </div>
    </div>
  );
};
