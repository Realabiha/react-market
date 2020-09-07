import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Link} from 'react-router-dom';
import {register} from '../action/userSignInAction'
import './Login.css';

const Register =  props => {
  // STORE
  const {userInfo, error}= useSelector(state => state.userRegister);
  const dispatch = useDispatch();

  // EVENT
  const handleFormSubmit = async e => {
    e.preventDefault();
    const {name, email, password} = e.target;
    const data = {
      name: name.value,
      email: email.value,
      password: password.value,
    }
    dispatch(register(data));
  }

  // HOOK
  useEffect(() => {
    userInfo && props.history.push('/login');
    return () => {
      // 
    }
  }, [userInfo, props])


  return <div className="login-form-wrap">
    <div className="logo-img-wrap">
      <Link to="/">
        <img src="/logo.png" alt="Amazon" title="首页" />
      </Link>
    </div>
    <form onSubmit={e => handleFormSubmit(e)}>
      <h1>Create Account</h1>
      <label htmlFor="name">
        <h3>Your name</h3>
        <input 
          type="text" 
          id="name" 
          name="name" 
          required
        />
      </label>
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
      <label htmlFor="repassword">
      <h3>Re-enter password</h3>
        <input 
          type="text" 
          id="repassword" 
          name="repassword" 
          required
        />
      </label>
      <label htmlFor="submit">
        <input type="submit" id="submit" value="Create your account"/>
      </label>
      <hr />
      <div className="sign-in-wrap">
        Already have an account? <Link to="/login">Sign-In</Link>
      </div>
    </form>
  </div>
}

export default Register;