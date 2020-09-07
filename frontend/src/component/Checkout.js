import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import Cookie from 'js-cookie';
import {putCartList, delCartList} from '../action/shoppingCartAction';
import './Checkout.css';

const Checkout = props => {
  // STORE
  const list = useSelector(state => state.shoppingCart).list;
  const dispatch = useDispatch();

  const userInfo = Cookie.get('user') && JSON.parse(Cookie.get('user')) || null;

  // HOOK
  useEffect(() => {
    return () => {
      // cleanup
    }
  }, [list])

  // EVENT
  const handleNumChange = ({e, id}) => {
    dispatch(putCartList({id, num: e.target.value}))
  }
  const handleDelItem = id => {
    dispatch(delCartList(id));
  }

  // JSX
  return <div className="check-container">
    <div className="cart-list-wrap">
      {list.length > 0 
      ? list.map((l, index) => 
        <div className="list-item-wrap" key={index}>
          <div className="item-img-wrap">
            <Link to={`/product/${l.id}`}>
              <img src={l.img} alt="product"/>
            </Link>
          </div>
          <div className="item-action-wrap">
            <h5 className="item-name item-margin">{l.name}</h5>
            <p className="item-price price item-margin"><small>￥</small><span>{l.price}</span></p>
            {l.stock > 0 
            ? <select value={l.num} className="item-margin" onChange={e => handleNumChange({e, id: l.id})}>
              {[...new Array(l.stock).keys()]
              .map((_, index) => <option key={index}>{++index}</option>)}
            </select>
            : null
            }
            <button className="danger-action-warn primary item-margin" onClick={e => handleDelItem(l.id)}>DELETE</button>
          </div>
        </div>
      ) 
      : <h3>YOUR CART IS EMPTY :( </h3>
      }
    </div>
    {list.length > 0 
    ? <div className="check-button-wrap">
      <div className="check-action-wrap">
        <h3>TOTAL ITEMS：{list.length}</h3>
        <p className="total-price price">
          TOTAL PRICE：
          <small>￥</small>
          <span>
            {calcTotalPrice(list)}
          </span>
        </p>
        <Link to={userInfo ? '/pay' : '/login'}>
          <button className="primary">CHECK</button>
        </Link>
      </div>
    </div>
    : null
    }
  </div>
}

function calcTotalPrice(list){
  return list.reduce((init, l) => init += l.price * l.num, 0).toFixed(2)
}

export default Checkout;