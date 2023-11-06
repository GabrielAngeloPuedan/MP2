import React from 'react';
import { NestedSportsandEnt } from '../components/Sports and Entertainment/NestedSportsandEnt';
import { BoxScore } from '../components/Sports and Entertainment/BoxScore';
import { NestedColumn } from '../components/Sports and Entertainment/NestedColumn';

export const SportsAndEntertainment = () => {
  return (
    <div>
      <BoxScore />
      <NestedColumn />
      <NestedSportsandEnt />
    </div>
  );
};
