import React from 'react';
import {Link} from 'react-router-dom';
import './Aside.css'
export default props => (
  <aside className="aside">
    <Link to="/login">
      <h1 className="aside-login-btn">Hello Go Login</h1>
    </Link>
    <ul className="aside-category-wrap">
      <li>Pants</li>
      <li>Shirts</li>
    </ul>
  </aside>
)