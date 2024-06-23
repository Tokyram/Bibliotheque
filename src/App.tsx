import React from 'react';
import './App.css';
import Header from './components/Header';
import HeaderBottom from './components/HeaderBottom';
import FilterOptions from './components/FilterOption';
import SearchBar from './components/SearchBar';
import ResourceGrid from './components/ResourceGrid';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
       <Header />
       <HeaderBottom />
       <div className="container">
                {/* <SearchBar /> */}
                {/* <FilterOptions /> */}
                <ResourceGrid />
            </div>

        <Footer />
    </div>
  );
}

export default App;
