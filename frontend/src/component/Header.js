import React, {useEffect} from 'react';
// eslint-disable-next-line
import {useSelector, useDispatch} from 'react-redux';
import {Link} from 'react-router-dom';
import Cookie from 'js-cookie';
import './Header.css'

const handleToggleAsiide = function(e){
  e.stopPropagation();
  document.querySelector('.aside').classList.add('active');
}

export default props => {
  // STORE
  const {list} = useSelector(state => state.shoppingCart);
  const userInfo = 
  Cookie.get('user') && JSON.parse(Cookie.get('user')) || useSelector(state => state.userSignIn).userInfo;
  // eslint-disable-next-line
  // const dispatch = useDispatch(); 

  // HOOK
  useEffect(() => {

    return () => {
      // cleanup
    }
  }, [list])

  // JSX
  return <header className="header">
    {/* menu */}
    <div 
      className="header-menu-wrap"
      onClick={handleToggleAsiide}
    >
      ||||
    </div>
       {/* logo */}
    <Link to="/">
      <div className="header-logo-wrap header-pointer">
          <img src="/logo.png" alt="Amazon" title="Amazon"/>
      </div>
    </Link>
    {/* input */}
    <div className="header-search-wrap">
      <label>
        <input type="text" placeholder="search what you want" />
        <button className="primary">Search</button>
      </label>
    </div>
    {/* basket */}
    <Link to="checkout">
      <div className="header-cart-wrap header-pointer">
        <img src="/cart.png" alt="Cart" title="Cart" />
        <span>{list.length}</span>
      </div>
    </Link>

    {/* links */}
    <Link to="/login">
      <div className="header-login-wrap header-pointer">
        <label>
          <button className="primary light-warn">{userInfo ? userInfo.name : 'Login'}</button>
        </label>
      </div>
    </Link>
   </header>
}