import React from 'react';
import { Link } from 'react-router-dom';
import './CollectionGridItem.css';

export interface CollectionGridItemProps {
  text: string;
  image: string;
  link: string;
}

const CollectionGridItem: React.FC<CollectionGridItemProps> = ({
  text,
  image,
  link,
}) => {
  return (
    <Link to={link} className="collectionGridItem">
      {text}
      <div
        className="collectionGridItem__bg"
        style={{ backgroundImage: `url("${image}")`, backgroundSize: 'cover' }}
      />
    </Link>
  );
};

export default CollectionGridItem;
