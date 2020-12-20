import React from 'react';
import { Link } from 'react-router-dom';
import './landing.css';

const Landing = () => {
  return (
    <div className="landing">
      <h2>Welcome to Post-bit</h2>
      <h5>The site where you can post your posts.</h5>
      <p>
        <Link to="/posts">Visit the latest posts here!</Link>
      </p>
    </div>
  );
}


export default Landing;