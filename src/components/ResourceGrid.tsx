import React, { useState } from 'react';
import '../styles/Header.css';
import ResourceCard from './ResourceCard';

const resources = [
    {
        image: "https://i.pinimg.com/236x/37/a9/98/37a99839a447357ee6d3d4b9c991d864.jpg",
        title: "TITRE DU LIVRE",
        author: "by Author's Name",
        category: "CATEGORIE",
        prix: 19.00,
        id: 1
    },
    {
      image: "https://i.pinimg.com/236x/37/a9/98/37a99839a447357ee6d3d4b9c991d864.jpg",
      title: "TITRE DU LIVRE",
      author: "by Author's Name",
      category: "CATEGORIE",
      prix: 19.00,
      id: 1
  },
  {
    image: "https://i.pinimg.com/236x/37/a9/98/37a99839a447357ee6d3d4b9c991d864.jpg",
    title: "TITRE DU LIVRE",
    author: "by Author's Name",
    category: "CATEGORIE",
    prix: 19.00,
    id: 1
},
{
  image: "https://i.pinimg.com/236x/37/a9/98/37a99839a447357ee6d3d4b9c991d864.jpg",
  title: "TITRE DU LIVRE",
  author: "by Author's Name",
  category: "CATEGORIE",
  prix: 19.00,
  id: 1
},
{
  image: "https://i.pinimg.com/236x/37/a9/98/37a99839a447357ee6d3d4b9c991d864.jpg",
  title: "TITRE DU LIVRE",
  author: "by Author's Name",
  category: "CATEGORIE",
  prix: 19.00,
  id: 1
},
{
  image: "https://i.pinimg.com/236x/37/a9/98/37a99839a447357ee6d3d4b9c991d864.jpg",
  title: "TITRE DU LIVRE",
  author: "by Author's Name",
  category: "CATEGORIE",
  prix: 19.00,
  id: 1
},
{
  image: "https://i.pinimg.com/236x/37/a9/98/37a99839a447357ee6d3d4b9c991d864.jpg",
  title: "TITRE DU LIVRE",
  author: "by Author's Name",
  category: "CATEGORIE",
  prix: 19.00,
  id: 1
},
{
  image: "https://i.pinimg.com/236x/37/a9/98/37a99839a447357ee6d3d4b9c991d864.jpg",
  title: "TITRE DU LIVRE",
  author: "by Author's Name",
  category: "CATEGORIE",
  prix: 19.00,
  id: 1
},
{
  image: "https://i.pinimg.com/236x/37/a9/98/37a99839a447357ee6d3d4b9c991d864.jpg",
  title: "TITRE DU LIVRE",
  author: "by Author's Name",
  category: "CATEGORIE",
  prix: 19.00,
  id: 1
},
{
  image: "https://i.pinimg.com/236x/37/a9/98/37a99839a447357ee6d3d4b9c991d864.jpg",
  title: "TITRE DU LIVRE",
  author: "by Author's Name",
  category: "CATEGORIE",
  prix: 19.00,
  id: 1
},
{
  image: "https://i.pinimg.com/236x/37/a9/98/37a99839a447357ee6d3d4b9c991d864.jpg",
  title: "TITRE DU LIVRE",
  author: "by Author's Name",
  category: "CATEGORIE",
  prix: 19.00,
  id: 1
},

    // Ajoutez plus de livres ici
];

const ITEMS_PER_PAGE = 6; // Nombre de livres par page

const ResourceGrid: React.FC = () => {
    const [currentPage, setCurrentPage] = useState(1);

    const handleNextPage = () => {
        setCurrentPage((prevPage) => Math.min(prevPage + 1, Math.ceil(resources.length / ITEMS_PER_PAGE)));
    };

    const handlePreviousPage = () => {
        setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
    };

    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const selectedResources = resources.slice(startIndex, startIndex + ITEMS_PER_PAGE);

    return (
        <div>
            <div className="resource-grid">
                {selectedResources.map((resource) => (
                    <ResourceCard
                        key={resource.id}
                        image={resource.image}
                        title={resource.title}
                        author={resource.author}
                        category={resource.category}
                        prix={resource.prix}
                        detailsLink={`/detail/${resource.id}`}
                        commande={`/`}
                    />
                ))}
            </div>
            <div className="pagination">
                <button className="pagination-btn" onClick={handlePreviousPage} disabled={currentPage === 1}>
                    Previous
                </button>
                <span className="pagination-info">Page {currentPage} of {Math.ceil(resources.length / ITEMS_PER_PAGE)}</span>
                <button className="pagination-btn" onClick={handleNextPage} disabled={currentPage === Math.ceil(resources.length / ITEMS_PER_PAGE)}>
                    Next
                </button>
            </div>
        </div>
    );
};

export default ResourceGrid;
