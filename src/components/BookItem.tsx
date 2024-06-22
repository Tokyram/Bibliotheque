/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import ValidationModal from './ValidationModal';
import '../styles/BookDetail.css';
import '../styles/Header.css';
import '../styles/Pannier.css';

interface BookItemProps {
    imageUrl: string;
    title: string;
    category: string;
    price: string;
}

const BookItem: React.FC<BookItemProps> = ({ imageUrl, title, category, price }) => {
    const [showModal, setShowModal] = useState(false);

    const handleValidate = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleConfirmBook = () => {
        console.log(`Adding ${title} to cart...`);
        handleCloseModal();
    };

    return (
        <div className="shopping-cart">
            <ul>
                <li>
                    <div className="book-image">
                        <img src={imageUrl} alt="Book Cover" />
                    </div>
                    <div className="book-info">
                        <h3>{title}</h3>
                        <div className="categorie">{category}</div>
                        <p>Price: {price}</p>
                        <input type="number" value={1} min={1} max={10} className="quantity-input" />
                    </div>
                    <div className="actions">
                        <button className="validate-btn" onClick={handleValidate}>
                            <a href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-check-all" viewBox="0 0 16 16">
                                    <path d="M8.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L2.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093L8.95 4.992zm-.92 5.14.92.92a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 1 0-1.091-1.028L9.477 9.417l-.485-.486z" />
                                </svg>
                            </a>
                        </button>
                        <button className="delete-btn">
                            <a href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-trash3-fill" viewBox="0 0 16 16">
                                    <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5" />
                                </svg>
                            </a>
                        </button>
                    </div>
                </li>
            </ul>

            {showModal && (
                <ValidationModal
                    bookTitle={title}
                    bookPrice={price}
                    bookQuantity={'1'} // Placeholder for quantity; replace with actual logic if needed
                    onClose={handleCloseModal}
                    onConfirm={handleConfirmBook}
                />
            )}
        </div>
    );
};

export default BookItem;
