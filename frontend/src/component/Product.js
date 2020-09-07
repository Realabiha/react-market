import React from 'react';
import {Link} from 'react-router-dom';
import './Product.css';
export default ({products}) => (
  <div className="recommended-product">
    <h1>今日推荐</h1>
    <div className="product-list">
      {
        products.map((product, index) => 
          <Link to={`/products/${product.id}`} key={index}>
            <div className="main-product-wrap">
              <div className="product-img-wrap">
                <img src={product.img} alt=""/>
              </div>
              <div className="product-info-wrap">
                <h3 className="info-title">{product.name}</h3>
                <div className="info-price price">
                  <small>￥</small> 
                  <b>{product.price}</b>
                </div>
                <div className="info-rating">{product.rating} Star</div>
                <p className="info-desc">{product.desc}</p>
              </div>
          </div>  
        </Link>
        )
      }
    </div>
   </div>
  )