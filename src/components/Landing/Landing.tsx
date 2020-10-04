import React from 'react';
import Header from '../Header/Header';
import './Landing.css';
import PrimaryButton from '../PrimaryButton/PrimaryButton';

interface Props {}

const Landing: React.FC<Props> = () => {
  return (
    <div className='landing'>
      <Header />
      <PrimaryButton>Shop Men</PrimaryButton>
      <div className='landing__bg'></div>
    </div>
  );
};

export default Landing;
