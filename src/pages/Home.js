import React, { useState, useEffect } from 'react';

import { NewsItems4 } from '../components/Home/NewsItems4';
import { FeaturedNews } from '../components/Home/FeaturedNews';
import { GeneralNews } from '../components/Home/GeneralNews';
import { HomeHeroSection } from '../components/Home/HomeHeroSection';
import { TopStories } from '../components/Home/TopStories';
import { ExchangeRates } from '../components/Home/ExchangeRates';

export const Home = () => {
  const [items, setItems] = useState([]);
  const [category] = useState('general');

  useEffect(() => {
    fetch(
      `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=64153f05e7c049d6ba06e84b92d12f92`
    )
      .then((res) => res.json())
      .then((data) => setItems(data.articles));
  }, [category]);

  return (
    <main>
      <ExchangeRates />
      <HomeHeroSection />
      <GeneralNews items={items} />
      <TopStories />
      <FeaturedNews />
      <NewsItems4 />
    </main>
  );
};
