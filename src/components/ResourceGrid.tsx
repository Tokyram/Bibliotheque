import React, { useEffect, useState } from 'react';
import '../styles/Header.css';
import ResourceCard from './ResourceCard';
import { ajoutCommande, getCategories, getLivres } from '../api';
import SearchBar from './SearchBar';
import FilterOptions from './FilterOption';

const ITEMS_PER_PAGE = 6; // Nombre de livres par page

const ResourceGrid: React.FC = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [livres, setLivres] = useState<any>([]);
    const [totalPages, setTotalPages] = useState(1);
    const [search, setSearch] = useState("");

    const [categ, setCateg] = useState<any>([]);
    const [selectedCategory, setSelectedCategory] = useState<number | null>(null);

    const getBooks = async (pageNumber: number, pageSize: number, recherche?: string, categ?: number) => {
      try {
        const response = await getLivres(pageNumber, pageSize, recherche, categ);
        if(response.status === 200) {
          setLivres(response.data.Livres);
          setTotalPages(response.data.PageCount);
        }
      } catch (error) {
        console.error('Erreur lors de la récupération des livres:', error);
      }
    }

    const getCategorie = async () => {
      try {
        const response = await getCategories();
        if(response.status === 200) {
          setCateg(response.data);
        }
      } catch (error) {
        console.error('Erreur lors de la récupération des livres:', error);
      }
    }

    const handleCategoryClick = (category: number) => {
      if (category === selectedCategory) {
        setSelectedCategory(null);
      } else {
        setSelectedCategory(category);
        getBooks(currentPage, ITEMS_PER_PAGE, search, category);
        // setCurrentPage(1);
      }
      console.log("select categ", selectedCategory);
    };

    const rechercheLivre = () => {
      console.log("recherche", search);
      if(search === "" || search === undefined) getBooks(currentPage, ITEMS_PER_PAGE);
      getBooks(currentPage, ITEMS_PER_PAGE, search);
    }

    useEffect(() => {
      getBooks(currentPage, ITEMS_PER_PAGE);
      getCategorie();
    }, [currentPage]);

    const handleNextPage = () => {
      setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
    };

    const handlePreviousPage = () => {
        setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
    };
    
    const addCommande = async (id: number) => {
      try {
        const response = await ajoutCommande(id);
        if(response.status === 200) {
          alert("Commande ajouté")
        }
      }
      catch (error: any) {
        alert(error.response.data)
        console.error('Erreur lors de l ajout commande :', error.response.data);
      }
    }
    const handleAddCommande = (id: number) => {
      addCommande(id);
    }

    return (
        <div>
          <SearchBar
            handleSubmit = {rechercheLivre}
            search = {search}
            setSearch = {setSearch}
          />
          <FilterOptions
            categories={categ}
            selectedCategory={selectedCategory}
            handleCategoryClick={handleCategoryClick}
          />
            <div className="resource-grid">
                {livres.map((resource: any) => (
                    <ResourceCard
                        id={resource.id}
                        image={`/${resource.image}`}
                        title={resource.titre}
                        author={resource.auteur}
                        category={resource.Categorie.nom}
                        prix={resource.prix}
                        detailsLink={`/detail/${resource.id}`}
                        commande={() => handleAddCommande(resource.id)}
                        stock={resource.Stock.quantite}
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
