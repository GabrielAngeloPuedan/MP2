import React, { useState, useEffect, useRef } from 'react';
import $ from 'jquery';
import './ExchangeRates.css';

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
        slidesToShow: 8,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1,
        speed: 3000,
        dots: false,
        cssEase: 'linear',
        waitForAnimate: false,
        pauseOnFocus: false,
        pauseOnHover: false,

        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              arrows: true,
              dots: false,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: true,
              dots: false,
            },
          },
        ],
      });
    }
  }, [rates]);

  return (
    <div className="exchange-rates-container">
      {' '}
      {/* Added a class for the wrapping container */}
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
                  <h4 className="text-lg font-bold mb-2">{currency} to USD</h4>
                  <p className="text-gray-600 mb-2">
                    Rate: {parseFloat(rate).toFixed(2)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
