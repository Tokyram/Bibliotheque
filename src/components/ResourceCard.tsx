import React from 'react';
import '../styles/Header.css';
import { Link } from 'react-router-dom';

interface ResourceCardProps {
    image: string;
    title: string;
    author: string;
    category: string;
    prix: number;
    detailsLink: string;
    commande: string;
}

const ResourceCard: React.FC<ResourceCardProps> = ({ image, title, author, category,prix, detailsLink,commande }) => {
    return (
      <div className="resource-card">
          <div className="categorie">{category}</div>

        <img src={image} alt="Resource" />
        <h3>{title}</h3>
        <div className="inf">
          <div className="prix">${prix}</div>
        </div>

        <div className="act">
        <button className='details'>
          <Link to={detailsLink}>Details</Link>
        </button>
        <button>
          <Link to={commande}>Commander</Link>
        </button>
        </div>
      </div>
    );
  }

export default ResourceCard;
