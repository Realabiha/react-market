import React from 'react';
import './Loading.css';
export default props =>{
  const {error} = props; 
  return(<div className="common-load-wrap">
    <h1>{error ? error : 'Loading...'}</h1>
  </div>)
} 