import * as actionType from '../actionType/productListType';

const initState = {products: null, error: undefined};

export default function productListReducer(state = initState, action){
  const {type, payload} = action;
  switch(type){
    case actionType.PRODUCT_LIST_REQUEST:
      return state;
    case actionType.PRODUCT_LIST_SUCCESS:
      return {...state, products: payload.products};
    case actionType.PRODUCT_LIST_FAILURE:
    return {...state, error: payload.error};
    default: return state; 
  }
}