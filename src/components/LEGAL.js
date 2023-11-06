import React from 'react';
import { Link } from 'react-router-dom';

export const LEGAL = () => {
  return (
    <div className="flex-shrink max-w-full w-1/2 md:w-1/4 mb-6 lg:mb-0">
      <h4 className="text-base leading-normal mb-3 uppercase text-gray-100">
        Legal
      </h4>
      <ul>
        <li className="py-1 hover:text-white">
          <Link to="/privacy-policy">Privacy Policy</Link>
        </li>
        <li className="py-1 hover:text-white">
          <Link to="/terms-of-use">Terms of Use</Link>
        </li>
        <li className="py-1 hover:text-white">
          <Link to="/license">License</Link>
        </li>
      </ul>
    </div>
  );
};
