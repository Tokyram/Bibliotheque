import React from 'react';
import '../styles/Modal.css';
import '../styles/BookDetail.css';
import '../styles/Header.css';
import '../styles/Pannier.css';
import { Link } from 'react-router-dom';

interface ValidationModalProps {
    bookTitle: string;
    bookPrice: string;
    bookQuantity: string;
    onClose: () => void;
    onConfirm: () => void;
    bookId: number;
    commandeId: number;
}

const ValidationModal: React.FC<ValidationModalProps> = ({ bookTitle, bookPrice, bookQuantity, onClose, onConfirm, bookId, commandeId }) => {
    return (
        <div className="modal show" id="validation-modal">
            <div className="modal-content show">
                <h2>Confirmation</h2>
                <p>You are about to add "{bookTitle}" to your cart.</p>
                <p><b>Price:</b> {bookPrice}</p>
                <p><b>Quantity:</b> {bookQuantity}</p>
                <div className="button">
                    <button className="confirm-btn" onClick={onConfirm}>
                    <Link 
                        to="/paiement"
                        state={{ idLivre: bookId, quantite: bookQuantity, idCommande: commandeId }}
                    >
                        Confirmer
                    </Link>
                    </button>
                    <button className="cancel-btn" onClick={onClose}>Cancel</button>
                </div>
            </div>
        </div>
    );
};

export default ValidationModal;
