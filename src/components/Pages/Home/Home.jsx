import React from 'react';
import './home.css';
import Pic from '/src/Images/HomeProfile.png'

const Home = () => {
  return (
    <diV className="home-container">
      <div className="home-content">
        <img className="pic-icon" src={Pic} alt="pic icon" />
       <div className="home-title"> WELCOME!!! TO MY GITHUB PORTFOLIO PROJECT. THIS REPOSITORY BELONGS TO INIOMOH ANGELA</div>
  
      </div>
    </diV>
  );
};

export default Home;