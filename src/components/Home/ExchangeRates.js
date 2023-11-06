import React, { useState, useEffect, useRef } from 'react';
import $ from 'jquery';

export const ExchangeRates = () => {
  const [rates, setRates] = useState([]);
  const slickRef = useRef();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://v6.exchangerate-api.com/v6/94ded1fd4625cc85a1a0a8a9/latest/USD'
        );
        const data = await response.json();
        if (data.conversion_rates) {
          setRates(Object.entries(data.conversion_rates));
        } else {
          throw new Error('No data found');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if ($(slickRef.current).hasClass('slick-initialized')) {
      $(slickRef.current).slick('unslick');
    }

    if (rates.length > 0) {
      $(slickRef.current).slick({
        infinite: true,
        speed: 1000,
        slidesToShow: 10,
        slidesToScroll: 1,
        autoplay: true, // Enable autoplay
        autoplaySpeed: 2000, // Set autoplay speed in milliseconds
        prevArrow:
          '<button type="button" class="slick-prev bg-white text-black px-4 py-2 rounded">Previous</button>',
        nextArrow:
          '<button type="button" class="slick-next bg-white text-black px-4 py-2 rounded">Next</button>',
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 10,
              arrows: true, // Show arrows for navigation
              dots: false, // Hide the dots
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              arrows: true,
              dots: false,
            },
          },
        ],
      });
    }
  }, [rates]);

  return (
    <div className="bg-white p-6">
      <div className="mx-auto px-3 sm:px-4 xl:px-2">
        <div
          className="slick-slider"
          ref={slickRef}
        >
          {rates.map(([currency, rate], index) => (
            <div
              key={index}
              className="p-2"
            >
              <div className="bg-gray-100 rounded-md overflow-hidden shadow-md p-4">
                <h6>Exchange Rates</h6>
                <h4 className="text-lg font-bold mb-2">{currency}</h4>
                <p className="text-gray-600 mb-2">
                  Rate: {parseFloat(rate).toFixed(2)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
