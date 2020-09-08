import * as actions from '../actionType/productDetailType';

const initState = {detail: null, error: undefined};

export default function productDetailReducer( state = initState, action){
  const {type, payload} = action;
  switch(type){
    case actions.PRODUCT_DETAIL_REQUEST:
      return {...state, detail: null};
    case actions.PRODUCT_DETAIL_SUCCESS:
      return {...state, detail: payload.detail}
    case actions.PRODUCT_DETAIL_FAILURE:
      return {...state, error: payload.error}
    default: return state
  }
}