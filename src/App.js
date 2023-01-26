import React from "react";
import { Route, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import * as Yup from 'yup';

import './App.css';
import Home from './Components/Home';
import Form from './Components/Form';
import schema from './formSchema';

const initialOrders = [];
const initialDisabled = true;

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
  const [ orders, setOrders ] = useState(initialOrders);
  const [ errors, setErrors ] = useState({ 
    name: '', 
    size: '', 
    specInst: '', 
    olives: '', 
    mushrooms: '',
    onion: '',
    peppers: ''  
  })
  const [ disabled, setDisabled ] = useState(initialDisabled)

 const validate = (name, value) => {
  Yup.reach(schema, name)
    .validate(value)
    .then(() => setErrors({...errors, [name]: ''}))
    .catch(err => setErrors({...errors, [name]: err.errors[0]}))
 }
  const handleChange = ((name, value) => {
    validate(name, value)
    setFormData({...formData, [name]:value})
  })
  const handleSubmit = ((evt) => {
    evt.preventDefault();
    axios.post('https://reqres.in/api/orders', formData)
      .then(res => {
        const { name, size, olives, mushrooms, onion, peppers, specIns, createdAt} = res.data;
        // I want to create an array that includes the names of the toppings only if their value in the data object is true. 
        const toppings = ['mushrooms', 'olives', 'onion', 'peppers'];
        const myToppings = [mushrooms, olives, onion, peppers]
        const theToppings = toppings.filter((item, idx) =>  myToppings[idx] === true)
        const newOrder = { name: name, size: size, specIns: specIns, key: createdAt, toppings: theToppings}
        setOrders([newOrder].concat( ...orders))
      })
      .catch(err => console.error(err))
    setFormData(initialValues)
  })


  useEffect(() => {
    schema.isValid(formData).then(valid => setDisabled(!valid))
  },[formData])



  return (
    
    <>
      <header>
        <div className='head' id="left">
        <h1 className='tight'>Lambda Eats</h1>
        <p className='tight'>Stuff your gobb and get back to it!</p></div>
        <div className="head" id='right'>
          <nav className='main-nav'>
            <Link to='/'>Home</Link>
            <Link to='/pizza' id='order-pizza'>Order</Link>
          </nav>
        </div>
      </header>
      <Route exact path="/" component={Home}/>
      <Route path='/pizza'>
        <Form 
          handleChange={handleChange}
          formData={formData}
          submit={handleSubmit}
          disabled={disabled}
          errors={errors}
          />
      </Route>
    </>
    
    
  );
};
export default App;
