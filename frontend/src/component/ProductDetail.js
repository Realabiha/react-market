import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { Link } from 'react-router-dom';
import Cookie from 'js-cookie';
import {fetchProductDetail} from '../action/productDetailAction';
import {fetchProductInfo, putCartList} from '../action/shoppingCartAction'
import Loading from './Loading';
import { handleGoBack } from '../util';
import './ProductDetail.css';

const ProductDetail = props => {
  // STORE
  const {detail: product, error} = useSelector(state => state.productDetail);
  const {list} = useSelector(state => state.shoppingCart);
  const dispatch = useDispatch();


  let num = 1;
  const userInfo = Cookie.get('user') && JSON.parse(Cookie.get('user')) || null;

  // HOOK
  useEffect(_ => {
    // componentDidMount
    dispatch(fetchProductDetail(props.match.params.id));
    return _ => {
      // componentWillUnmount
    };
  }, [props.match.params.id, dispatch]);

  // EVENT
  const handleNumChange = e => {
    num = 1 * e.target.value;
  }
  const handleCartButton = ({id, stock}) => {
    checkOutStock({list, id, num, stock}) 
    ? alert(`商品库存${stock}`)
    : checkShoppingCart(list, id) 
    ? dispatch( putCartList({id, num}) ) 
    : dispatch( fetchProductInfo({id, num}) )
  }

  // JSX
  return <div className="container">
    { product[0] ? <h1 className="product-detail-title">{product[0].name}详情</h1> : null}
    <div className="product-detail-back" onClick={handleGoBack}>
      <button className="primary">&lt; Go Back</button>
    </div>
    {
      product[0]
      ? product.map((p, index) => (
        <div className="product-detail-wrap" key={index}>
          <div className="detail-img-wrap">
            <img src={p.img} alt="product" title="商品图片" />
          </div>
          <div className="detail-info-wrap">
            <h5 className="info-title info-item">
              <span className="info-list-title">商品名称：</span>
              {p.name}
            </h5>
            <div className="info-price info-item price">
              <span className="info-list-title">商品价格：</span>
              <small>￥</small>
              <b>{p.price}</b>
            </div>
            <div className="info-rating info-item">
              <span className="info-list-title">商品评价：</span>
              {p.rating} Star
            </div>
            <p className="info-desc info-item">
              <span className="info-list-title">商品简介：</span>
              {p.desc}
            </p>
            <hr />
            <p className="info-desc info-item">
              <span className="info-list-title">注意事项：</span>
              {p.desc}{p.desc}{p.desc}{p.desc}
            </p>
          </div>
          <div className="product-action-wrap">
            <div className="detail-cart-wrap">
              <div className="info-price cart-item price">
                <small>￥</small>
                <b>{p.price}</b>
              </div>
              <h5 className="info-title cart-item">{p.name}</h5>
              <div className="product-num cart-item">
                {p.stock > 0 
                ? <select onChange={handleNumChange}>
                  {[...new Array(p.stock).keys()]
                  .map((_, index) => <option key={index}>{++index}</option>)}
                </select>
                : null
                }
              </div>
              <div className="cart-button cart-item" >
                {p.stock > 0 
                ? <Link to={userInfo ? "/checkout" : "/login"}>
                  <button className="primary" onClick={e => handleCartButton(p)}>Add To Cart</button>
                </Link>
                : <h3 className="out-stock-warn">OUT OF STOCK :(</h3>
                }
              </div>
            </div>
            <div className="detail-ad-wrap cart-item">
              <img src="/ad2.jpg" alt="广告" title="广告" />
            </div>
            <div className="detail-warn-wrap cart-item price">
              <ol>
                <li>
                  {p.desc}
                  {p.desc}
                  {p.desc}
                </li>
              </ol>
            </div>
          </div>
        </div>
      ))
      : <Loading error={error}/>
    }
  </div>
};


// helper function
function checkOutStock({list, id, num, stock}){
  const exist = list.find(l => l.id === id);
  return exist && exist.num + num > stock;
}
function checkShoppingCart(list, id){
  return list.map(l => l.id).some(i => i === id);
}

export default ProductDetail;
