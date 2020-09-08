import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Link} from 'react-router-dom';
import {fetchProductList} from '../action/productListAction';
import {logOut} from '../action/userSignInAction';
import {cleanCart} from '../action/shoppingCartAction';
import Cookie from 'js-cookie';
import './Header.css'



export default props => {
  // STORE
  const {list} = useSelector(state => state.shoppingCart);
  const userInfo = 
  Cookie.get('user') && JSON.parse(Cookie.get('user')) || useSelector(state => state.userSignIn).userInfo;
  const dispatch = useDispatch(); 
  const [keywords, setKeywords] = useState('');
  // HOOK
  useEffect(() => {

    return () => {
      // cleanup
    }
  }, [list, userInfo])

  // EVENT
  const handleToggleAsiide = function(e){
    e.stopPropagation();
    document.querySelector('.aside').classList.add('active');
  }
  const handleSearchProducts = ({props}) => {
    props.match.path === '/checkout' && props.history.push('/'); 
    dispatch(fetchProductList({keywords}));
    setKeywords('');
  }
  const handleLogin = () => {
    Cookie.remove('user');
    Cookie.remove('cart');
    userInfo && dispatch(logOut());
    userInfo && dispatch(cleanCart());
  }

  // JSX
  return <header className="header">
    <div 
      className="header-menu-wrap"
      onClick={handleToggleAsiide}
    >
      ||||
    </div>

    <Link to="/">
      <div className="header-logo-wrap header-pointer">
          <img src="/logo.png" alt="Amazon" title="Amazon"/>
      </div>
    </Link>

    <div className="header-search-wrap">
      <label>
        <input 
          type="text" 
          placeholder="search what you want" 
          // onChange={e => keywords = e.target.value} 
          onChange={e => setKeywords(e.target.value)}
          value={keywords}
        />
        <button className="primary" onClick={e => handleSearchProducts(props)}>搜索</button>
      </label>
    </div>

    {userInfo 
      ? <Link to="/checkout">
        <div className="header-cart-wrap header-pointer">
          <img src="/cart.png" alt="Cart" title="Cart" />
          <span className="price">{list.length}</span>
        </div>
      </Link>
      : null
    }

    <Link to="/login">
      <div className="header-login-wrap header-pointer" onClick={handleLogin}>
          <span className="light-warn">
            {userInfo ? userInfo.name : 'Login'}
          </span>
        <img src={userInfo ? "/logout.png" : "login.png"} alt="login" />
      </div>
    </Link>
  </header>
}