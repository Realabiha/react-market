import * as actions from '../actionType/shoppingCartType';
import axios from 'axios';

export const addCartList = product => {
  return {
    type: actions.ADD_CART_LIST,
    payload: {
      product
    }
  }
}
export const delCartList = id => {
  return {
    type: actions.DEL_CART_LIST,
    payload: {
      id,
    }
  }
}
export const putCartList = ({id, num}) => {
  return {
    type: actions.PUT_CART_LIST,
    payload: {
      id,
      num
    }
  }
}


export const fetchProductInfo = ({id, num}) => async dispatch => {
  console.log(`/products/${id}`)
  const res = await axios.get(`/products/${id}`);
  dispatch(addCartList({...res.data[0], num}))
}
