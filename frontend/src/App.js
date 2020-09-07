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
          <Route 
            path="/product/:id" 
            render={ _ => <ProductDetail props={_} />}
          >
          </Route>
          <Route path='/checkout'>
            <Header />
            <Checkout />
          </Route>
          <Route 
            path='/login' 
            component={Login}
          ></Route>
          <Route 
            path='/register' 
            component={Register}
          ></Route>
          <Route 
            path='/pay' 
            component={Pay}
          ></Route>
          <Route 
            path='/' 
            exact={true}
          >
            <Header />
            <Main />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
