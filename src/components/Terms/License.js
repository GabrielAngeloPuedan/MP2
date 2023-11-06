import React from 'react';
import { Link } from 'react-router-dom';

export const License = () => {
  return (
    <div className="flex-shrink max-w-full w-1/2 md:w-1/4 mb-6 lg:mb-0">
      <ul>
        <li className="py-1 hover:text-white">
          <Link to="/license">License</Link>
        </li>
      </ul>
    </div>
  );
};
