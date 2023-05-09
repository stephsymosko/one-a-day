export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

export const products = [
  {
    id: 1,
    name: 'Christmas Wreath',
    price: 24.99,
    description: 'A beautiful wreath for the holidays'
  },
  {
    id: 2,
    name: 'Easter Wreath',
    price: 16.99,
    description: ''
  },
  {
    id: 3,
    name: 'Halloween Wreath',
    price: 22.99,
    description: 'A spooky wreath for Halloween'
  }
];
