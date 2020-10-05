import React from 'react';
import './PrimaryButton.css';

interface Props extends React.ComponentProps<'button'> {}

const PrimaryButton: React.FC<Props> = ({
  className = '',
  children,
  ...props
}) => {
  return (
    <button {...props} className={`primaryButton ${className}`}>
      {children}
    </button>
  );
};

export default PrimaryButton;
