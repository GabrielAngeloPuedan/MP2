import React, { useState, useEffect, useRef } from 'react';
import $ from 'jquery';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel';

const NewsCard = ({ article }) => (
  <div className="bg-gray-100 rounded-md overflow-hidden shadow-md">
    <a href={article.url}>
      <img
        className="w-full"
        src={article.urlToImage}
        alt={article.title}
      />
    </a>
    <div className="p-4">
      <h3 className="text-lg font-bold leading-tight mb-2">
        <a href={article.url}>{article.title}</a>
      </h3>
      <p className="text-gray-600 leading-tight mb-2">{article.description}</p>
      <a
        className="text-gray-500"
        href={article.url}
      >
        <span className="inline-block h-3 border-l-2 border-red-600 mr-2"></span>
        Read more
      </a>
    </div>
  </div>
);

export const NewsItems4 = () => {
  const [value, setValue] = useState([]);
  const slickRef = useRef();

  const fetchData = async () => {
    try {
      const response = await fetch(
        'https://newsapi.org/v2/everything?q=lifestyle&apiKey=39ec76a824884acba0f2a0a813657dc3'
      );
      const result = await response.json();
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
    fetchData();
  }, []);

  useEffect(() => {
    if ($(slickRef.current).hasClass('slick-initialized')) {
      $(slickRef.current).slick('unslick');
    }

    if (value.length > 0) {
      $(slickRef.current).slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
            },
          },
        ],
      });
    }
  }, [value]);

  return (
    <div className="bg-white py-6">
      <div className="xl:container mx-auto px-3 sm:px-4 xl:px-2">
        <div className="flex flex-row flex-wrap">
          <div className="flex-shrink max-w-full w-full overflow-hidden">
            <div className="w-full py-3">
              <h2 className="text-gray-800 text-2xl font-bold">
                <span className="inline-block h-5 border-l-3 border-red-600 mr-2"></span>
                Top Stories
              </h2>
            </div>

            <div
              className="slick-slider"
              ref={slickRef}
            >
              {value.slice(0, 8).map((article, key) => (
                <div
                  key={key}
                  className="p-2"
                >
                  <NewsCard article={article} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
