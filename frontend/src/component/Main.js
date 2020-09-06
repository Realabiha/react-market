import React from 'react';
import {connect} from 'react-redux';
import {fetchProductList} from '../action/productListAction';
import Product from './Product';
import Loading from './Loading';
import './Main.css';

class Main extends React.Component{
  // STATE
  // constructor(props){
  //   super(props);
  // }

  // HOOK
  componentDidMount(){
    this.props.fetchData();
  }
  // JSX
  render(){
    return this.props.products
    ? <main className="main">
      <Product products={this.props.products} />
    </main>
    : <Loading error={this.props.error}/>
  }
}

// helper function
function mapStateToProps(state){
  const {products, error} = state.productList;
  const shoppingCart = state.shoppingCart;
  return {products, error, shoppingCart};
}
function mapDispatchToProps(dispatch){
  return {
    fetchData: _ => {
      dispatch(fetchProductList());
    }
  }
}

// connect Main to redux store
// map redux store state and dispatch to Main props
export default connect(mapStateToProps, mapDispatchToProps)(Main);