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
const userSignInFailure = msg => {
  return {
    type: actions.USER_SIGNIN_FAILURE,
    payload: {
      msg
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
const userRegisterFailure = msg => {
  return {
    type: actions.USER_REGISTER_FAILURE,
    payload: {
      msg
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

export const logOut = () => {
  return {
    type: actions.USER_LOGOUT_ACTION
  }
}