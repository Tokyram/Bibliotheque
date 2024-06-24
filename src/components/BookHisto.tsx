/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useCallback, useState } from 'react';
import ValidationModal from './ValidationModal';
import '../styles/BookDetail.css';
import '../styles/Header.css';
import '../styles/Pannier.css';

interface BookItemProps {
    imageUrl: string;
    title: string;
    category: string;
    price: string;
    priceUnit: string;
    quantiteCommande: number;
    idLivre: number;
    idCommande: number;
}

const BookHisto: React.FC<BookItemProps> = ({ imageUrl, title, category, price, quantiteCommande, idLivre, idCommande, priceUnit }) => {

    return (
        <div className="shopping-cart">
            <ul>
                <li>
                    <div className="book-image">
                        <img src={imageUrl} alt="Book Cover" />
                    </div>
                    <div className="book-info">
                        <h3>{title}</h3>
                        <div className="categories">{category.toUpperCase()}</div>
                        <p>Total Price: ${price}</p>
                        <p>Unit Price: ${priceUnit}</p>
                        <input type="number" value={quantiteCommande} className="quantity-input" readOnly />
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default BookHisto;
