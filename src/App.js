import React from 'react';
import { GlobalStyle } from './globalStyle';
import {BrowserRouter as Router} from "react-router-dom";
import Hero from './Components/Hero';
import Products from './Components/Products';
import { productData, productDataTwo } from './Components/Products/data';
import Feature from './Components/Features';
import Footer from './Components/Footer';




function App() {  
  return (
    <Router>
      <GlobalStyle/> 
      <Hero/>
      <Products heading="choose your favourite" data={productData}/>
      <Feature/>
      <Products heading="Sweets treats for you" data={productDataTwo}/>
      <Footer/>
    </Router>
  );
}

export default App;
