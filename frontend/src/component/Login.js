import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Link} from 'react-router-dom';
import {signIn} from '../action/userSignInAction'
import Cookie from 'js-cookie';
import './Login.css';

const Login = props => {
  // STORE
  const {userInfo, error}= useSelector(state => state.userSignIn);
  const dispatch = useDispatch();

  // EVENT
  const handleFormSubmit = async e => {
    e.preventDefault();
    const {email, password} = e.target;
    const data = {
      email: email.value,
      password: password.value
    }
    dispatch(signIn(data));
  }

  // HOOK
  useEffect(() => {
    Cookie.set('user', JSON.stringify(userInfo));
    userInfo && props.history.push('/');
    return () => {
      // 
    }
  }, [userInfo, props])


  return <div className="login-form-wrap">
    <div className="logo-img-wrap">
      <Link to="/">
        <img src="/logo.png" alt="Amazon" title="首页"/>
      </Link>
    </div>
    <form onSubmit={e => handleFormSubmit(e)}>
      <h1>Login in</h1>
      <label htmlFor="email">
        <h3>Email</h3>
        <input 
          type="text" 
          id="email" 
          name="email" 
          required
        />
      </label>
      <label htmlFor="password">
      <h3>Password</h3>
        <input 
          type="text" 
          id="password" 
          name="password" 
          required
          placeholder="at least 6 characters" />
      </label>
      <label htmlFor="submit">
        <input type="submit" id="submit" value="Create your account"/>
      </label>
      <hr />
      <div className="sign-in-wrap">
        New to amazon? <Link to="/register">Register</Link>
      </div>
    </form>
  </div>
}

export default Login;