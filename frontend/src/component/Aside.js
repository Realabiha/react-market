import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Link} from 'react-router-dom';
import Cookie from 'js-cookie';
import {fetchProductList} from '../action/productListAction';
import {logOut} from '../action/userSignInAction';
import './Aside.css'
export default props => {

  // STORE
  const userInfo = 
  Cookie.get('user') && JSON.parse(Cookie.get('user')) || 
  useSelector(state => state.userSignIn).userInfo;
  const dispatch = useDispatch();

  // EVENT
  const handleSearchProducts = e => {
    const category = e.target.dataset.category;
    dispatch(fetchProductList({category}))
  }


  return <aside className="aside">
    {userInfo
    ? <h1 className="aside-login-btn">Hello {userInfo.name}</h1>
    : <Link to="/login">
      <h1 className="aside-login-btn">Hello Go Login</h1>
    </Link>
    }
    <ul className="aside-category-wrap" onClick={handleSearchProducts}>
      <li data-category="">All</li>
      <li data-category="Pants">Pants</li>
      <li data-category="Shirts">Shirts</li>
    </ul>
  </aside>
}