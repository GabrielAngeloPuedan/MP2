import React from 'react';

export const CreatorCard = ({ creator }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4">
      <img
        src={creator.imageUrl}
        alt={creator.name}
        className="w-full h-auto rounded-lg mb-4"
      />
      <h2 className="text-lg font-bold">{creator.name}</h2>
      <p className="text-sm text-gray-600 mb-2">{creator.description}</p>
    </div>
  );
};
