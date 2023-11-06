import React, { useState, useEffect } from 'react';

export const MoreSportsNews = () => {
  const [headlines, setHeadlines] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://gnews.io/api/v4/top-headlines?category=sports&lang=en&country=ph&max=10&apikey=f9f38c9e7d539a4322386cf01130f046'
        );
        const data = await response.json();
        setHeadlines(data.articles);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex">
      {/* Your existing content on the left side */}
      <div className="w-3/4">{/* Your existing content goes here */}</div>

      {/* Top Headlines on the right side */}
      <div className="w-1/4">
        <h2 className="text-2xl font-bold mb-4">Top Headlines</h2>
        <ul>
          {headlines.map((headline, index) => (
            <li
              key={index}
              className="mb-2"
            >
              <a
                href={headline.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {headline.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
