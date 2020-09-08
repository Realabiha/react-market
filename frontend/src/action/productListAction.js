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
export const fetchProductList = ({category, keywords}) => async (dispatch, getState) => {
  const query = createQueryStr({category, keywords});
  console.log(query);
  try {
    dispatch(fetchListQuest());
    const res = await axios.get(`/products${query}`);
    dispatch(fetchListSuccess(res.data));
  } catch (error) {
    dispatch(fetchListFailure(error));
  }
}

function createQueryStr(obj){
  return Object.keys(obj).reduce((init, key, index) => {
    return init += `${obj[key] ? `${key}=${obj[key]}&` : ''}`;
  }, '?')
}