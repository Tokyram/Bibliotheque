import React from 'react';
import '../styles/Header.css';
import { Link } from 'react-router-dom';

interface ResourceCardProps {
    id: number;
    image: string;
    title: string;
    author: string;
    category: string;
    prix: number;
    detailsLink: string;
    commande: () => void;
    stock: number;
}

const ResourceCard: React.FC<ResourceCardProps> = ({ id, image, title, author, category,prix, detailsLink, commande, stock }) => {
    return (
      <div className="resource-card" key={id}>
          <div className="categorie">{category}</div>

        <img src={image} alt="Resource" />
        <h3>{title}</h3>
        <div className="inf">
          <div className="prix">${prix}</div>
          <div className="prix">{stock} dispo</div>
        </div>

        <div className="act">
        <button className='details'>
          <Link to={detailsLink}>Detail</Link>
        </button>
        <button onClick={commande}>
          Commander
        </button>
        </div>
      </div>
    );
  }

export default ResourceCard;
