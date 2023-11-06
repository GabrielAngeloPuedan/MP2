import React from 'react';
import { WNMoreTopStories } from '../components/World News/WNMoreTopStories';
import { EuropeNews } from '../components/World News/EuropeNews';
import { WNAfrica } from '../components/World News/WNAfrica';
import { WNFeatured } from '../components/World News/WNFeatured';
import { WNHeroSection } from '../components/World News/WNHeroSection';

export const WorldNews = () => {
  return (
    <div>
      <WNHeroSection />
      <EuropeNews />
      <WNFeatured />
      <WNAfrica />
      <WNMoreTopStories />
    </div>
  );
};
