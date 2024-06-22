// ShoppingCart.tsx
import React from 'react';
import BookItem from './BookItem';
import '../styles/BookDetail.css';
import '../styles/Header.css';
import '../styles/Pannier.css';

const ShoppingCart: React.FC = () => {
    return (
        <div className="shopping-cart">
            <ul>
                <BookItem
                    imageUrl="https://i.pinimg.com/236x/78/24/4b/78244bc466e7db6d18c6e82470c1e68d.jpg"
                    title="Book Title 1"
                    category="Category"
                    price="$19.99"
                />
                <BookItem
                    imageUrl="https://i.pinimg.com/236x/37/a9/98/37a99839a447357ee6d3d4b9c991d864.jpg"
                    title="Book Title 2"
                    category="Category"
                    price="$29.99"
                />
            </ul>
        </div>
    );
}

export default ShoppingCart;
