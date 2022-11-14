import React from 'react';

import './about.css';

import pic from '/src/Images/About.png';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <img className="pic-icon" src={pic} alt="pic icon" />

        <div><div className="about-title">About</div>
          <div className="about-text">This Project was built by Iniomoh Angela
            using the{' '}
            <a
              className="about-links"
              rel="noreferrer"
              target="_blank"
              href="https://docs.github.com/en/rest"
            >
              GitHub API
            </a>{' '}
            functionality.

            You can explore more by reviewing my {' '}
            <a
              className="about-links"
              rel="noreferrer"
              target="_blank"
              href="https://github.com/IniomohAngela">
              GitHub profile.
            </a>{' '}
            Also connect with me on{' '}
            <a
              className="about-links"
              rel="noreferrer"
              target="_blank"
              href="https://twitter.com/Emike____"  >
              Twitter
            </a>
            {' '}
            or{' '}
            <a
              className="about-links"
              rel="noreferrer"
              target="_blank"
              href="https://medium.com/@angela.iniomoh">
              Medium
            </a>
          </div>
        </div>
      </div>
    </div>




  );
};

export default About;