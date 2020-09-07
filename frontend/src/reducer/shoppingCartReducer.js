import * as actions from '../actionType/shoppingCartType';
import Cookie from 'js-cookie';

// eslint-disable-next-line
const initState = {list: Cookie.get('cart') && JSON.parse(Cookie.get('cart')) || []}; 

export default function shoppingCartReducer(state = initState, action){
  const {type, payload} = action;
  let list;
  switch(type){
    case actions.ADD_CART_LIST:
      list = [...state.list, payload.product];
      Cookie.set('cart', JSON.stringify(list));
      return {...state, list: [...state.list, {...payload.product}]};
    case actions.DEL_CART_LIST:
      list = filterShoppingCart(payload, state);
      Cookie.set('cart', JSON.stringify(list));
      return {...state, list};
    case actions.PUT_CART_LIST:
      list = updateShoppingCart(payload, state);
      Cookie.set('cart', JSON.stringify(list));
      return {...state, list};
    default: return state;
  }
}

function updateShoppingCart(payload, state){
  const list = [...state.list];
  const {id, num} = payload;
  list.forEach(p => {
    if(p.id === id) p.num=num;
  })
  return list;
}
function filterShoppingCart(payload, state){
  const list = [...state.list];
  const {id} = payload;
  return list.filter(p => p.id !== id)
}