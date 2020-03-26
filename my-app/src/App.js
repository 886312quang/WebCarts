import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";

import Home from "./pages/Home";
import Footer from "./components/Footer";
import ProductsContainer from './containers/ProductsContainer';
import CartsContainer from './containers/CartsContainer';

function App() {
  return (
    <Router>
    <div className="App">
      <Route path="/" exact component={Home} />
      <Route path="/shop" exact component={ProductsContainer} />
      <Route path="/cart" exact component={CartsContainer} />
      <Footer/>
    </div>
    </Router>
  );
}

export default App;
