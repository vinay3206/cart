import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Product = ({ product, onAddToCart, count, isAddToCartDisabled }) =>
  <div className="d-inline-flex">
    <Link to={`/detail/${product.id}`} className="product-card">
      <img src={product.imageUrl} alt={product.id} style={{ height: '200px' }}/>
      <h4 className="product-card-title">
        {product.title} {' '} {product.brand.label}
      </h4>
      <div>{ count ? ` Qunatity: ${count}` : ''}</div>
      <div>{product.currency}{product.price}</div>
      <div>
          <button className="btn-flat btn-red"
            onClick={
              (e) => {
                onAddToCart(product);
                e.stopPropagation();
                e.preventDefault();
              }
            }
            disabled={isAddToCartDisabled}>
            Add to Cart
          </button>
      </div>
    </Link>;
  </div>;

Product.defaultProps = {
  onAddToCart: () => {},
  count: 0,
  isAddToCartDisabled: false,
};

Product.propTypes = {
  product: PropTypes.object.isRequired,
  onAddToCart: PropTypes.func,
  count: PropTypes.number,
  isAddToCartDisabled: PropTypes.bool,
};

export default Product;
