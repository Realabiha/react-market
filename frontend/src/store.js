import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import productListReducer from './reducer/productListReducer';
import productDetailReducer from './reducer/productDetailReducer';
import shoppingCartReducer from './reducer/shoppingCartReducer'; 
import userSignInReducer from './reducer/userSignInReducer';
const reducer = combineReducers({
  productList: productListReducer,
  productDetail: productDetailReducer,
  shoppingCart: shoppingCartReducer,
  userSignIn: userSignInReducer
})
const initState = {};
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; 
const store = createStore(reducer, initState, composeEnhancer(applyMiddleware(thunk)));

// store.subscribe(_ => {
//   console.log(store.getState())
// })

export default store;




// what is a thunk(think)? functional programming
// const result1 = a + b;
// const result2 = a => b => a + b;
// console.log(result2(1)(2))

// Redux Thunk middleware allows you to write action creators that return a function instead of an action. 
// The thunk can be used to delay the dispatch of an action, 
// or to dispatch only if a certain condition is met. 
// The inner function receives the store methods dispatch and getState as parameters.