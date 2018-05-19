import React from 'react';
import PropTypes from 'prop-types';

const ProductDetails = ({ product, onAddToCart }) =>
  <div className="product-details-container">
    <h4 className="product-card-title">
      {product.title} {' '}
    </h4>
    <div className="details-image-container">
      <img src={product.imageUrl} alt={product.id} style={{ height: '200px' }}/>
    </div>
    <div className="details-content-container">
      <div className="details-content-container-capacity">{product.capacity}{product.capacityUnit}</div>
      <div className="details-content-container-price">{product.currency}{product.price}</div>
      <div className="details-content-container-description">{product.description}</div>
      <button
        className="btn-flat btn-red"
        onClick={() => {
          onAddToCart(product);
        }}
      >
        Add to Cart
      </button>
    </div>
  </div>;


ProductDetails.defaultProps = {
  onAddToCart: () => {},
};

ProductDetails.propTypes = {
  product: PropTypes.object.isRequired,
  onAddToCart: PropTypes.func,
};

export default ProductDetails;
