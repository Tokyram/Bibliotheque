/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import { useParams } from 'react-router-dom';
import '../styles/BookDetail.css';
import '../styles/Header.css';
import '../styles/Pannier.css';

const BookDetail: React.FC = () => {
  const { id } = useParams();

  return (
      
      <div className="livre-detail">
        <div className="livre-image">
          <img src="https://i.pinimg.com/236x/37/a9/98/37a99839a447357ee6d3d4b9c991d864.jpg" alt="Book Image" />
        </div>
        <div className="livre-info">
          <h2>The Art of Storytelling {id}</h2>
          <p><b>Author:</b> John Doe</p>
          <p><b>Number of Pages:</b> 320</p>
          <div className="categories">CATEGORIE</div>
          <p><b>EditionDate:</b> January 2022</p>
          <p><b>Summary:</b></p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec sed odio dui. Donec sed odio dui.</p>
          <button className="add-to-cart-btn"><a href="pannier.html">Ajouter au pannier</a></button>
        </div>
      </div>
  );
}

export default BookDetail;