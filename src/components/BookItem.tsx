/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useCallback, useState } from 'react';
import ValidationModal from './ValidationModal';
import '../styles/BookDetail.css';
import '../styles/Header.css';
import '../styles/Pannier.css';
import { annulerCommande } from '../api';

interface BookItemProps {
    imageUrl: string;
    title: string;
    category: string;
    price: string;
    quantiteCommande: number;
    idLivre: number;
    idCommande: number;
}

const BookItem: React.FC<BookItemProps> = ({ imageUrl, title, category, price, quantiteCommande, idLivre, idCommande }) => {
    const [showModal, setShowModal] = useState(false);
    const [quantite, setQuantite] = useState(quantiteCommande);

    const handleValidate = useCallback(() => {
        setShowModal(true);
    }, []);

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleConfirmBook = () => {
        console.log(`Adding ${title} to cart...`);
        handleCloseModal();
    };

    const handleChangeQuantite = (qte: string) => {
        const qtt = Number(qte);
        setQuantite(qtt);
        console.log("quantite",qtt);
    }

    const handleCancelCommande = async (id: number) => {
        try {
            const response = await annulerCommande(id);
            if(response.status === 200) {
                alert(response.data.message);
            }
        } catch (error: any) {
            alert(error.response.data);
            console.error('Erreur lors de l annulation commande :', error.response.data);
        }
    }

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
                        <p>Price: ${price}</p>
                        <input type="number" min={1} value={quantite} className="quantity-input" onChange={(e) => handleChangeQuantite(e.target.value)} />
                    </div>
                    <div className="actions">
                        <button className="validate-btn" onClick={handleValidate}>
                            <a href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-check-all" viewBox="0 0 16 16">
                                    <path d="M8.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L2.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093L8.95 4.992zm-.92 5.14.92.92a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 1 0-1.091-1.028L9.477 9.417l-.485-.486z" />
                                </svg>
                            </a>
                        </button>
                        <button className="delete-btn" onClick={() => handleCancelCommande(idCommande)}>
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
                    bookQuantity={quantite.toString()}
                    onClose={handleCloseModal}
                    onConfirm={handleConfirmBook}
                    bookId={idLivre}
                    commandeId={idCommande}
                />
            )}
        </div>
    );
};

export default BookItem;
