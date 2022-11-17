import React from 'react';

import { Link } from 'react-router-dom';

import './page.css';

import pic from '/src/Images/Failure.png'

const Page = () => {
  return (
    <div className="error-container">
      <div className="error-details">
        <img className="error-image" src={pic} alt="Error 404 Page" />
        <Link to="/">
          <button className="home-btn"> Go Back Home </button>
        </Link>
      </div>
    </div>
  );
};

export default Page;