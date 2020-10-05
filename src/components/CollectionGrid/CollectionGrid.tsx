import React from 'react';
import './CollectionGrid.css';
import CollectionGridItem, {
  CollectionGridItemProps,
} from './CollectionGridItem/CollectionGridItem';
import { collections } from './collectionItems';

interface Props {
  //   items: CollectionGridItemProps[];
}

const CollectionGrid: React.FC<Props> = () => {
  return (
    <div className="collectionGrid">
      {collections.map((collection) => (
        <CollectionGridItem {...collection} />
      ))}
    </div>
  );
};

export default CollectionGrid;
