import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useMediaQuery } from 'react-responsive';
import './BoxScore.css';

export const BoxScore = () => {
  const [value, setValue] = useState([]);
  const isMobile = useMediaQuery({ maxWidth: 767 }); // Adjust the value as per your requirements

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

  const settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: isMobile ? 1 : 4, // Adjust number of cards to show based on screen size
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <div className="box-score-container">
      <Slider {...settings}>
        {value.map((data, key) => (
          <div key={key}>
            <div className="score-box bg-black p-4 m-4">
              <div className="score-box-content">
                <div className="teams">
                  <div className="team">
                    <p className="text-white">{data.home_team.full_name}</p>
                    <p className="text-white">{data.home_team_score}</p>
                  </div>
                  <div className="team">
                    <p className="text-white">{data.visitor_team.full_name}</p>
                    <p className="text-white">{data.visitor_team_score}</p>
                  </div>
                </div>
                <p className="game-details text-white">
                  {new Date(data.date).toLocaleDateString()}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};
