import React from 'react';
import './App.css';
import Header from './components/Header';
import ShoppingCart from './components/ShoppingCart';
import SearchBar from './components/SearchBar';
import Footer from './components/Footer';
import CartSummary from './components/CartSummary';

function App() {
  return (
       <>
       
       <Header />
       <div className="container">
          <SearchBar />
        </div>
    
        <div className="content">

        <ShoppingCart />
        <CartSummary />

        </div>
        
        <Footer />
        
        </>
  );
}

export default App;
