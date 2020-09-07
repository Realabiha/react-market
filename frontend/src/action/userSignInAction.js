import * as actions from '../actionType/userSignInType';
import axios from 'axios';

// Signin
const userSignInRequest = ({email, password}) => {
  return {
    type: actions.USER_SIGNIN_REQUEST,
    payload: {
      email,
      password
    }
  }
}
const userSignInSuccess = userInfo => {
  return {
    type: actions.USER_SIGNIN_SUCCESS,
    payload: {
      userInfo
    }
  }
}
const userSignInFailure = error => {
  return {
    type: actions.USER_SIGNIN_FAILURE,
    payload: {
      error
    }
  }
}

export const signIn = ({email, password}) => async dispatch => {
  try {
    dispatch(userSignInRequest({email, password}));
    const res = await axios.post('/users/signin', {email, password});
    dispatch(userSignInSuccess(res.data));
  } catch (error) {
    dispatch(userSignInFailure(error.message));
  }

}


// Register
const userRegisterRequest = ({name, email, password}) => {
  return {
    type: actions.USER_REGISTER_REQUEST,
    payload: {
      name,
      email,
      password
    }
  }
}
const userRegisterSuccess = userInfo => {
  return {
    type: actions.USER_REGISTER_SUCCESS,
    payload: {
      userInfo
    }
  }
}
const userRegisterFailure = error => {
  return {
    type: actions.USER_REGISTER_FAILURE,
    payload: {
      error
    }
  }
}



export const register = ({name, email, password}) => async dispatch => {
  try {
    dispatch(userRegisterRequest({name, email, password}));
    const res = await axios.post('/users/register', {name, email, password});
    dispatch(userRegisterSuccess(res.data));
  } catch (error) {
    dispatch(userRegisterFailure(error.message));
  }

}