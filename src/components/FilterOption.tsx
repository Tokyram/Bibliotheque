import React from 'react';
import '../styles/Header.css';


const FilterOptions: React.FC<any> = ({categories, selectedCategory, handleCategoryClick})=> {
    return (
        <div className="filter-options">
            {
                categories.map((c: any) => (
                    <button
                      key={c.id}
                      className={selectedCategory === c.id ? 'selected' : ''}
                      onClick={() => handleCategoryClick(c.id)}
                    >
                      {c.nom}
                    </button>
                ))
            }
        </div>
    );
}

export default FilterOptions;
