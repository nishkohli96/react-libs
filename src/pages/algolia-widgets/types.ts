import type { BaseHit } from 'instantsearch.js';

export interface ProductInfo extends BaseHit {
  objectID: string;
  name: string;
  description: string;
  brand: string;
  categories: Array<string>;
  image: string;
  popularity: number;
  price: number;
}
