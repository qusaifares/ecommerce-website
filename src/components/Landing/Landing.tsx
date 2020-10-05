import React from 'react';
import Header from '../Header/Header';
import './Landing.css';
import PrimaryButton from '../PrimaryButton/PrimaryButton';

interface Props {}

const Landing: React.FC<Props> = () => {
  return (
    <div className="landing">
      <div className="landing__content text-center">
        <div className="container">
          <p className="landing__subtitle">Fresh Start</p>
          <h2 className="landing__title">Spring Collection</h2>
          <PrimaryButton>Shop Women</PrimaryButton>
        </div>
      </div>
      <div className="landing__bg"></div>
    </div>
  );
};

export default Landing;
