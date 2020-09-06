import * as actions from '../actionType/productDetailType';
import axios from 'axios';

const fetchDetailQuest = id => ({
  type: actions.PRODUCT_DETAIL_REQUEST,
  payload: {
    id
  }
})
const fetchDetailSuccess = detail => ({
  type: actions.PRODUCT_DETAIL_SUCCESS,
  payload: {
    detail
  }
})
const fetchDetailFailure = error => ({
    type: actions.PRODUCT_DETAIL_FAILURE,
    payload: {
      error
    }
})

export const fetchProductDetail = id => async dispatch => {
  try {
    dispatch(fetchDetailQuest());
    const res = await axios.get(`/products/${id}`);
    dispatch(fetchDetailSuccess(res.data))
  } catch (error) {
    dispatch(fetchDetailFailure(error.message))
  }
}