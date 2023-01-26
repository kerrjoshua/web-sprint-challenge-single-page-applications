import React from "react";
import { Route, Link } from 'react-router-dom';

import './App.css';
import Home from './Components/Home';
import Form from './Components/Form';

const App = () => {
  return (
    
    <>
      <header>
        <div className='head' id="left">
        <h1 className='tight'>Lambda Eats</h1>
        <p className='tight'>Stuff your gobb and get back to it!</p></div>
        <div className="head" id='right'>
          <nav className='main-nav'>
            <Link to='/'>Home</Link>
            <Link to='/order'>Order</Link>
          </nav>
        </div>
      </header>
      <Route exact path="/" component={Home}/>
      <Route path='/order' component={Form}/>
    </>
    
    
  );
};
export default App;
