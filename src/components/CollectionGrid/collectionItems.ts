import { CollectionGridItemProps } from './CollectionGridItem/CollectionGridItem';

const { PUBLIC_URL } = process.env;

export const collections: CollectionGridItemProps[] = [
  {
    text: 'Men',
    link: '/men',
    image: `${PUBLIC_URL}/images/featured/collection-men.png`,
  },
  {
    text: 'Women',
    link: '/women',
    image: `${PUBLIC_URL}/images/featured/collection-women.png`,
  },
  {
    text: 'Bags',
    link: '/bags',
    image: `${PUBLIC_URL}/images/featured/collection-bags.png`,
  },
  {
    text: 'Home',
    link: '/home',
    image: `${PUBLIC_URL}/images/featured/collection-home.png`,
  },
  {
    text: 'Outdoor',
    link: '/outdoor',
    image: `${PUBLIC_URL}/images/featured/collection-outdoor.png`,
  },
];
