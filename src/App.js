import React from "react";
import { Route, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

import './App.css';
import Home from './Components/Home';
import Form from './Components/Form';

const App = () => {
  const initialValues = { 
    name: '', 
    size: '', 
    specInst: '', 
    olives: false, 
    mushrooms: false,
    onion: false,
    peppers: false  
  };
  const [ formData, setFormData ] = useState(initialValues);
  const [ orders, setOrders ] = useState([]);

  const handleChange = ((name, value) => {
    setFormData({...formData, [name]:value})
  })

  useEffect(() => {console.log(formData)},[formData])

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
      <Route path='/order'>
        <Form 
          handleChange={handleChange}
          formData={formData}
          />
      </Route>
    </>
    
    
  );
};
export default App;
