import { put } from 'redux-saga/effects';
import { fetchFiltersHandler, applyFilterHandler } from '../filter';
import { FETCH_FILTERS_SUCCESS, FETCH_FILTERS_FAILURE, APPLY_FILTER_SUCCESS, APPLY_FILTER_FAILURE } from '../../actions/types';
import filters from '../../reducers/mockData/filters';

describe('fetchFiltersHandler sage testing', () => {
  const gen = fetchFiltersHandler();

  it('should call the put functon with FETCH_FILTERS_SUCCESS', () => {
    const next = gen.next();
    expect(next.value).toEqual(put({ type: FETCH_FILTERS_SUCCESS, payload: filters }));
  });

  it('should call the put functon with FETCH_PRODUCTS_FAILURE', () => {
    const next = gen.throw({ error: 'test' });
    expect(next.value).toEqual(put({ type: FETCH_FILTERS_FAILURE }));
  });
});

describe('applyFilterHandler sage testing', () => {
  const action = {
    payload: { categoryId: 1, optionId: 2, value: true },
  };
  const gen = applyFilterHandler(action);

  it('should call the put functon with FETCH_PRODUCT_DETAILS_SUCCESS', () => {
    const next = gen.next();
    expect(next.value).toEqual(put({ type: APPLY_FILTER_SUCCESS, payload: action.payload }));
  });

  it('should call the put functon with APPLY_FILTER_FAILURE', () => {
    const next = gen.throw({ error: 'test' });
    expect(next.value).toEqual(put({ type: APPLY_FILTER_FAILURE }));
  });
});
