import React from 'react';
import Product from '../product';

const Products = ({ products, onAddToCart }) =>
  products.map((product) =>
    <Product product={product} key={product.id} onAddToCart={onAddToCart}/>
  );

export default Products;
