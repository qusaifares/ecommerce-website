import React from 'react';
import './PrimaryButton.css';

interface Props extends React.ComponentProps<'button'> {}

const PrimaryButton: React.FC<Props> = ({ children }) => {
  return <button className='primaryButton'>{children}</button>;
};

export default PrimaryButton;
