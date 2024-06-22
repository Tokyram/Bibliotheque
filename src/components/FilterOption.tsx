import React from 'react';
import '../styles/Header.css';


const FilterOptions: React.FC = () => {
    return (
        <div className="filter-options">
            <button>Site Visit</button>
            <button>Webinars</button>
            <button>White Papers</button>
            <button>Corporate Mentoring</button>
            <button>Technology Transfer</button>
            <button>Sponsored Research</button>
        </div>
    );
}

export default FilterOptions;
