import React from 'react';
import '../styles/Header.css';


const SearchBar: React.FC<any> = ({search, setSearch, handleSubmit}) => {
    return (
        <div className="search-bar">
            <input type="text" placeholder="Search..." value={search} onChange={(e) => setSearch(e.target.value)}/>
            <button onClick={handleSubmit}>Search</button>
        </div>
    );
}

export default SearchBar;
