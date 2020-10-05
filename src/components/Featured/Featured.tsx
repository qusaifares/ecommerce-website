import React from 'react';
import './Featured.css';
import SectionHeader from '../SectionHeader/SectionHeader';
import CollectionGrid from '../CollectionGrid/CollectionGrid';

interface Props {}

const Featured: React.FC<Props> = () => {
  return (
    <div className="featured">
      <div className="container">
        <SectionHeader title="Featured Collections" />
        <CollectionGrid />
      </div>
    </div>
  );
};

export default Featured;
