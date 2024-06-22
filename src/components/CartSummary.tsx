// CartSummary.tsx
import React from 'react';
import '../styles/BookDetail.css';
import '../styles/Header.css';
import '../styles/Pannier.css';

const CartSummary: React.FC = () => {
    return (
        <div className="cart-summary">
            <div className="tot">
                <h2>Information</h2>
                <div className="summary-item">
                    <p>Total Books:</p>
                    <span id="total-books">4</span>
                </div>
                <div className="summary-item">
                    <p>Total Price:</p>
                    <span id="total-price">$49.98</span>
                </div>
                <div className="summary-item">
                    <p>Average Price:</p>
                    <span id="average-price">$24.99</span>
                </div>
            </div>
            <div className="tat">
                <div className="summary-item">
                    <p>Livraison :</p>
                    <span id="total-books">$4.02</span>
                </div>
            </div>
            <div className="tit">
                <div className="summary-item">
                    <p>
                        <svg style={{ color: '#4c6618' }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check-circle-fill" viewBox="0 0 16 16">
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                        </svg>
                        Immerse yourself in the world of storytelling with this captivating novel that takes you on a journey through the ages. From ancient myths to modern-day tales, this book explores the art of storytelling in all its forms.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default CartSummary;
