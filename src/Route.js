import React from 'react';
import Home from './Components/Home';
import About from './Components/About';
import Product from './Components/Product';
import ProductItem from './Components/ProductItem';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";

function RouteConfig() {
  return (
    <div >
   <Router>
   <switch>
   <Route path="/" component={}/>
   </switch>
   </Router>
    </div>
  );
}

export default RouteConfig;
