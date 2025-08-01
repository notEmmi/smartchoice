import React from 'react';
import '../css/LoadingPage.css';

const LoadingPage = () => {
  return (
    <div className="loading-container">
      <div className="loading-content">
        <div className="loading-spinner"></div>
        <h2>Loading SmartChoice...</h2>
        <p>Preparing your personalized experience</p>
      </div>
    </div>
  );
};

export default LoadingPage;
