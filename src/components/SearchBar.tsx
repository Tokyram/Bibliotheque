import React from 'react';
import '../styles/Header.css';


const SearchBar: React.FC = () => {
    return (
        <div className="search-bar">
            <input type="text" placeholder="Search..." />
            <button>Search</button>
        </div>
    );
}

export default SearchBar;
