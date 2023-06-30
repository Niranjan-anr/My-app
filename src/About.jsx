import React from 'react';
import classes from './About.module.css';

const About = () => {
  return (
    <div className={classes.about}>
      <h2>About Us</h2>
      <p>
        Welcome to our donation website! We are dedicated to making a positive impact by facilitating donations for students from svce college who cna't afford their college fees.
      </p>
      <p>
        All the big payments and fees details would be updated in the website by the donor permission for transperancy
      </p>
      <p>
        Our platform connects generous donors with those in need, making it easy to contribute to meaningful projects and initiatives. Together, we can make a difference and create a better world.
      </p>
    </div>
  );
};

export default About;
