import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css'
import Home from './ecommerce/home'
import HeaderComp from './ecommerce/components/Header/header'
import Breadcrumb from './ecommerce/components/Breadcrumb/Breadcrumb'
import ProductDetails from './ecommerce/components/productDetails/productDetails'
import RelatedProducts from './ecommerce/components/relatedProducts/relatedProducts'
import FooterComp from './ecommerce/components/Footer/footer'

function App() {
  return (
    <div className="product-page">
      
      <Router>
        <Route render={() => (<Home />)} />
        <Route exact path={`${process.env.PUBLIC_URL}/ecommerce`} render={() => (<React.Fragment><HeaderComp /><Breadcrumb /><ProductDetails /><RelatedProducts /><FooterComp /></React.Fragment>)} />
        
      </Router>
    </div>
  );
}

export default App;