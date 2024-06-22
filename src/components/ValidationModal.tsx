import React, { useState, useRef, useEffect, useCallback } from 'react';
import '../styles/Modal.css';
import '../styles/BookDetail.css';
import '../styles/Header.css';
import '../styles/Pannier.css';

interface ValidationModalProps {
    bookTitle: string;
    bookPrice: string;
    bookQuantity: string;
    onClose: () => void;
    onConfirm: () => void;
}

const ValidationModal: React.FC<ValidationModalProps> = ({ bookTitle, bookPrice, bookQuantity, onClose, onConfirm }) => {
    const [showModal, setShowModal] = useState(true);
    const bookTitleRef = useRef<HTMLHeadingElement>(null);
    const bookPriceRef = useRef<HTMLParagraphElement>(null);
    const bookQuantityRef = useRef<HTMLParagraphElement>(null);

    const handleValidateClick = useCallback(() => {
        const bookTitleText = (document.querySelector('.book-info h3') as HTMLHeadingElement)?.textContent || '';
        const bookPriceText = (document.querySelector('.book-info p') as HTMLParagraphElement)?.textContent || '';
        const bookQuantityValue = (document.querySelector('.quantity-input') as HTMLInputElement)?.value || '';

        if (bookTitleRef.current) {
            bookTitleRef.current.textContent = bookTitleText;
        }

        if (bookPriceRef.current) {
            bookPriceRef.current.textContent = bookPriceText;
        }

        if (bookQuantityRef.current) {
            bookQuantityRef.current.textContent = bookQuantityValue;
        }

        setShowModal(true);
    }, []);

    const handleConfirmClick = useCallback(() => {
        onConfirm();
        setShowModal(false);
    }, [onConfirm]);

    const handleCancelClick = useCallback(() => {
        setShowModal(false);
    }, []);

    useEffect(() => {
        const validateBtn = document.querySelector('.validate-btn');
        const confirmBtn = document.querySelector('.confirm-btn');
        const cancelBtn = document.querySelector('.cancel-btn');

        if (validateBtn) {
            validateBtn.addEventListener('click', handleValidateClick);
        }

        if (confirmBtn) {
            confirmBtn.addEventListener('click', handleConfirmClick);
        }

        if (cancelBtn) {
            cancelBtn.addEventListener('click', handleCancelClick);
        }

        return () => {
            if (validateBtn) {
                validateBtn.removeEventListener('click', handleValidateClick);
            }

            if (confirmBtn) {
                confirmBtn.removeEventListener('click', handleConfirmClick);
            }

            if (cancelBtn) {
                cancelBtn.removeEventListener('click', handleCancelClick);
            }
        };
    }, [handleValidateClick, handleConfirmClick, handleCancelClick]);

    if (!showModal) {
        return null;
    }

    return (
        <div className={`modal ${showModal ? 'show' : ''}`} id="validation-modal">
            <div className={`modal-content ${showModal ? 'show' : ''}`}>
                <h2>Confirmation</h2>
                <p>You are about to add "{bookTitle}" to your cart.</p>
                <p><b>Price:</b> {bookPrice}</p>
                <p><b>Quantity:</b> {bookQuantity}</p>
                <div className="button">
                    <button className="confirm-btn" onClick={handleConfirmClick}><a href="/payement">Confirmer</a></button>
                    <button className="cancel-btn" onClick={handleCancelClick}>Cancel</button>
                </div>
            </div>
        </div>
    );
};

export default ValidationModal;
