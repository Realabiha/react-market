import * as actionType from '../actionType/productListType';
import axios from 'axios';

// helper function
const fetchListQuest = _ => {
  return {
    type: actionType.PRODUCT_LIST_REQUEST
  }
}
const fetchListSuccess = products => {
  return {
    type: actionType.PRODUCT_LIST_SUCCESS,
    payload: {
      products
    }
  }
}
const fetchListFailure = error => {
  return {
    type: actionType.PRODUCT_LIST_FAILURE,
    payload: {
      error: error.message
    }
  }
}

// highorder function return a function --> dispatch => {// dispatch action}
export const fetchProductList = _ => async (dispatch, getState) => {
  try {
    dispatch(fetchListQuest());
    const res = await axios.get('/products');
    dispatch(fetchListSuccess(res.data.products));
  } catch (error) {
    dispatch(fetchListFailure(error));
  }
}