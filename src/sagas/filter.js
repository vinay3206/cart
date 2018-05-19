import { put } from 'redux-saga/effects';
import { FETCH_FILTERS_SUCCESS, FETCH_FILTERS_FAILURE, APPLY_FILTER_SUCCESS, APPLY_FILTER_FAILURE } from '../actions/types';
import filters from '../reducers/mockData/filters';

export function* fetchFiltersHandler() {
  try {
    yield put({ type: FETCH_FILTERS_SUCCESS, payload: filters });
  } catch (error) {
    yield put({ type: FETCH_FILTERS_FAILURE });
  }
}

export function* applyFilterHandler(action) {
  try {
    yield put({ type: APPLY_FILTER_SUCCESS, payload: action.payload });
  } catch (error) {
    yield put({ type: APPLY_FILTER_FAILURE });
  }
}

export default fetchFiltersHandler;
