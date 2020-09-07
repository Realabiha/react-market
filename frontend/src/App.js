import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Header from './component/Header';
import Footer from './component/Footer';
import Aside from './component/Aside';
import Main from './component/Main'
import ProductDetail from './component/ProductDetail';
import Checkout from './component/Checkout';
import Login from './component/Login';
import Register from './component/Register'
import Pay from './component/Pay';
import './App.css';
function App() {
  return (
    <Router>
      <div className='app'>
        <Aside />
        <Switch>
          <Route path="/products/:id" exact={true} component={ProductDetail}></Route>
          <Route path='/checkout'>
            <Header />
            <Checkout />
          </Route>
          <Route path='/login' exact={true} component={Login}></Route>
          <Route path='/register' exact={true} component={Register}></Route>
          <Route path='/pay' exact={true} component={Pay}></Route>
          <Route path='/'>
            <Header />
            <Main />
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
