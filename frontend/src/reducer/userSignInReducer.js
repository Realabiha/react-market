import * as actions from '../actionType/userSignInType';
import Cookie from 'js-cookie';

const userInfo = Cookie.get('user') && JSON.parse(Cookie.get('user')) || null;

const initState =  {userInfo, error: undefined}
export default function userSignInReducer(state = initState, action){
  const {type, payload} = action;
  switch(type){
    case actions.USER_SIGNIN_REQUEST: 
      return state;
    case actions.USER_SIGNIN_SUCCESS:
      return {...state, userInfo: payload.userInfo};
    case actions.USER_SIGNIN_FAILURE:
      return {...state, error: payload.error}
    default: return state;
  }
}