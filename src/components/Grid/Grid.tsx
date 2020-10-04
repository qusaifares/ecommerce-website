import React from 'react';
import './Grid.css';

interface Props extends React.ComponentProps<'div'> {}

const Grid: React.FC<Props> = ({ className, children, ...props }) => {
  return (
    <div className={`grid ${className}`} {...props}>
      {children}
    </div>
  );
};

export default Grid;
