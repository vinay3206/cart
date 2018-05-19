import { FETCH_PRODUCTS_SUCCESS, FETCH_FILTERS_SUCCESS, APPLY_FILTER_SUCCESS, FETCH_PRODUCT_DETAILS_SUCCESS } from '../actions/types';

export const initialState = {
  list: [],
  filters: [],
  filteredList: [],
  productDetail: null,
};

export default function productReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_PRODUCTS_SUCCESS: {
      return {
        ...state,
        list: action.payload,
        filteredList: action.payload,
      };
    }
    case FETCH_FILTERS_SUCCESS: {
      const filters = action.payload;
      const newFilters = filters.map((filter) => {
        const newOptions = filter.options.map((option) => {
          const newOption = { ...option, isApplied: false };
          return newOption;
        });
        return { ...filter, options: newOptions };
      });
      return {
        ...state,
        filters: newFilters,
      };
    }
    case APPLY_FILTER_SUCCESS: {
      const { categoryId, optionId, value } = action.payload;

      // update filter first
      const filter = state.filters.find((filter) => filter.id === categoryId);
      const option = filter.options.find((option) => option.id === optionId);
      option.isApplied = value;
      let filteredList = [];

      // Apply filter here
      state.filters.forEach((filter, index) => {
        const listToFilter = index ? filteredList : state.list;
        let isAnyOptionApplied = false;
        let filteredItems = [];

        filter.options.forEach((option) => {
          let items = [];
          if (option.isApplied) {
            isAnyOptionApplied = true;
            if (filter.category.toLowerCase() === 'price') {
              //  apply price filter
              items = listToFilter.filter((item) =>
                item.price <= option.max && item.price >= option.min);
            } else {
              // apply brand filer
              items = listToFilter.filter((item) => item.brand.id === option.id);
            }
          }
          filteredItems = [...filteredItems, ...items];
        });
        if (!isAnyOptionApplied && !index) {
          filteredList = state.list;
        } else {
          filteredList = filteredItems.length ? filteredItems : filteredList;
        }
      });
      return {
        ...state,
        filters: [...state.filters],
        filteredList,
      };
    }
    case FETCH_PRODUCT_DETAILS_SUCCESS: {
      return {
        ...state,
        productDetail: { ...action.payload },
      };
    }
    default:
      return state;
  }
}
