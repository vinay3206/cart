import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import Header from '../components/header';
import ProductList from '../components/product-list';
import Filter from '../components/filter';
import { fetchProducts, fetchFilters, addToCart, onFilterChange } from '../actions/product';

export class Home extends Component {
  componentWillMount() {
    const { fetchProducts, fetchFilters } = this.props;
    // call to fetch the products and filters
    fetchProducts();
    fetchFilters();
  }


  render() {
    const { product: { filteredList, filters }, addToCart, onFilterChange, cart } = this.props;
    // calculating total items in the cart
    const cartItemsCount = cart.items
      .reduce((total, { quantity }) => total + quantity, 0);

    return (
      <div>
        <Header showHomeLink={false} showCartLink cartItemsCount={cartItemsCount}/>
        <div className="flex-container">
          <div className="filter-container flex-3">
            <Filter filters={filters} onFilterChange={onFilterChange}/>
          </div>
          <div className="home-content-container flex-6 border-left-0">
            <ProductList products={filteredList} onAddToCart={addToCart}/>
          </div>
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  fetchProducts: PropTypes.func.isRequired,
  fetchFilters: PropTypes.func.isRequired,
  addToCart: PropTypes.func.isRequired,
  product: PropTypes.object.isRequired,
  onFilterChange: PropTypes.func.isRequired,
  cart: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    product: state.product,
    cart: state.cart,
  };
}

const actions = { fetchProducts, fetchFilters, addToCart, onFilterChange };

const mapDispatchToProps = (dispatch) => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
