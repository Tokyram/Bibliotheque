/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/BookDetail.css';
import '../styles/Header.css';
import '../styles/Pannier.css';
import { getDetailLivre } from '../api';

const BookDetail: React.FC = () => {
  const { id } = useParams();

  const [livre, setLivre] = useState<any>({});

  const getLivre = async (id: number) => {
    try {
      const response = await getDetailLivre(id);
      if(response.status === 200) {
        setLivre(response.data)
      }
    } catch (error) {
      console.error('Erreur lors de la récupération des livres:', error);
    }
  }

  useEffect(() => {
    if(id) {
      getLivre(Number(id));
    }
  }, []);

  return (
      
      <div className="livre-detail">
        <div className="livre-image">
          <img src={`/${livre.image}`} alt="Book Image" />
        </div>
        <div className="livre-info">
          <h2>{livre?.titre}</h2>
          <p><b>Author:</b> {livre?.auteur}</p>
          <p><b>Number of Pages:</b> {livre?.nbPage}</p>
          <div className="categories">{livre?.Categorie?.nom?.toUpperCase()}</div>
          <p><b>EditionDate:</b> {livre?.dateEdition?.split("T")[0]}</p>
          <div className="prix" style={{ textAlign: 'center'}}>${livre?.prix}</div>
          <p><b>Summary:</b></p>
          <p>{livre?.resume}</p>
          <button className="add-to-cart-btn"><a href="pannier.html">Commander</a></button>
        </div>
      </div>
  );
}

export default BookDetail;