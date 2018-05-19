import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import Header from '../components/header';
import ProductDetails from '../components/product-detail';
import { fetchProductDetails, addToCart } from '../actions/product';

export class Details extends Component {
  componentWillMount() {
    const { match: { params: { id } } } = this.props;
    const { fetchProductDetails } = this.props;
    // making call to fetch the product details here
    fetchProductDetails(id);
  }


  render() {
    const { productDetail, addToCart, cart } = this.props;
    // calculating the total items in the cart
    const cartItemsCount = cart.items
      .reduce((total, { quantity }) => total + quantity, 0);

    return (
        <div>
          <Header showHomeLink showCartLink cartItemsCount={cartItemsCount}/>
          <div className="flex-container">
            <div className="home-content-container flex-6">
              { productDetail && <ProductDetails product={productDetail} onAddToCart={addToCart}/> }
            </div>
          </div>
        </div>
    );
  }
}

Details.propTypes = {
  match: PropTypes.object.isRequired,
  fetchProductDetails: PropTypes.func.isRequired,
  productDetail: PropTypes.object.isRequired,
  addToCart: PropTypes.func.isRequired,
  cart: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    productDetail: state.product.productDetail,
    cart: state.cart,
  };
}


const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ fetchProductDetails, addToCart }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Details);
