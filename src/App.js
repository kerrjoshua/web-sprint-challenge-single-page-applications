import React from "react";
import { Route, Link } from 'react-router-dom';

import Home from './Components/Home';
import Form from './Components/Form';

const App = () => {
  return (
    
    <>
    
    <h1>Lambda Eats</h1>
    <p>You can remove this code and create your own header</p>
      <Route exact path="/" component={Home}/>
      <Route path='/order' component={Form}/>
    </>
    
    
  );
};
export default App;
