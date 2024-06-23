import React, { useEffect, useState } from 'react';
import '../styles/Header.css';
import ResourceCard from './ResourceCard';
import { getLivres } from '../api';
import SearchBar from './SearchBar';
import FilterOptions from './FilterOption';

const ITEMS_PER_PAGE = 6; // Nombre de livres par page

const ResourceGrid: React.FC = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [livres, setLivres] = useState<any>([]);
    const [totalPages, setTotalPages] = useState(1);
    const [search, setSearch] = useState("");

    const getBooks = async (pageNumber: number, pageSize: number, recherche?: string) => {
      try {
        const response = await getLivres(pageNumber, pageSize, recherche);
        if(response.status === 200) {
          setLivres(response.data.Livres);
          setTotalPages(response.data.PageCount);
        }
      } catch (error) {
        console.error('Erreur lors de la récupération des livres:', error);
      }
    }

    const rechercheLivre = () => {
      console.log("recherche", search);
      if(search === "" || search === undefined) getBooks(currentPage, ITEMS_PER_PAGE);
      getBooks(currentPage, ITEMS_PER_PAGE, search);
    }

    useEffect(() => {
      getBooks(currentPage, ITEMS_PER_PAGE);
    }, [currentPage]);

    const handleNextPage = () => {
      setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
    };

    const handlePreviousPage = () => {
        setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
    };

    return (
        <div>
          <SearchBar
            handleSubmit = {rechercheLivre}
            search = {search}
            setSearch = {setSearch}
          />
          <FilterOptions />
            <div className="resource-grid">
                {livres.map((resource: any) => (
                    <ResourceCard
                        key={resource.id}
                        image={`./${resource.image}`}
                        title={resource.titre}
                        author={resource.auteur}
                        category={resource.Categorie.nom}
                        prix={resource.prix}
                        detailsLink={`/detail/${resource.id}`}
                        commande={`/`}
                    />
                ))}
            </div>
            <div className="pagination">
                <button className="pagination-btn" onClick={handlePreviousPage} disabled={currentPage === 1 || currentPage === 0}>
                    Previous
                </button>
                <span className="pagination-info">Page {currentPage} of {totalPages}</span>
                <button className="pagination-btn" onClick={handleNextPage} disabled={currentPage === totalPages || totalPages === 0}>
                    Next
                </button>
            </div>
        </div>
    );
};

export default ResourceGrid;
