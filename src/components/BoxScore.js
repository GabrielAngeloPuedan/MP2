import React, { useState, useEffect } from 'react';

export const BoxScore = () => {
  const [value, setValue] = useState([]);

  const api = async () => {
    try {
      let response = await fetch(
        'https://www.balldontlie.io/api/v1/games?per_page=10&start_date=2023-10-25&end_date=2023-11-25'
      );
      let result = await response.json();
      if (result.data && result.data.length > 0) {
        setValue(result.data);
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
    <main>
      <section className="flex flex-row max-w-7xl mx-auto gap-3 py-7">
        {value.slice(0, 4).map((data, key) => (
          <div key={key}>
            <div
              href="/"
              className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Final Score
                </h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {data.date}
                </p>
                <p className="mb-3 font-bold  text-gray-700 dark:text-gray-400">
                  {data.home_team.full_name} : {data.home_team_score}
                </p>
                <p className="mb-3 font-bold text-gray-700 dark:text-gray-400">
                  {data.visitor_team.full_name} : {data.visitor_team_score}
                </p>
              </div>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
};
