import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import { getCommandeValide } from "../api";
import BookHisto from "./BookHisto";

const ITEMS_PER_PAGE = 3;

const Commande: React.FC = () => {

    const [currentPage, setCurrentPage] = useState(1);
    const [commandes, setCommandes] = useState<any>([]);
    const [totalPages, setTotalPages] = useState(1);
    const [search, setSearch] = useState("");

    const getCommandes = async (pageNumber: number, pageSize: number, recherche?: string) => {
        try {
          const response = await getCommandeValide(pageNumber, pageSize, recherche);
          if(response.status === 200) {
            setCommandes(response.data.Commandes);
            setTotalPages(response.data.PageCount);
          }
        } catch (error) {
          console.error('Erreur lors de la récupération des commandes:', error);
        }
    }

    useEffect(() => {
        getCommandes(currentPage, ITEMS_PER_PAGE);
    },[currentPage])

    const handleNextPage = () => {
        setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
    };
  
    const handlePreviousPage = () => {
        setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
    };

    const rechercheCommande = () => {
        console.log("recherche", search);
        if(search === "" || search === undefined) getCommandes(currentPage, ITEMS_PER_PAGE);
        getCommandes(currentPage, ITEMS_PER_PAGE, search);
    }

    return (
        <>
            <div className="container">
                <SearchBar
                    search = {search}
                    setSearch = {setSearch}
                    handleSubmit = {rechercheCommande}
                />
            </div>

            <div className="content">
                <div className="shopping-cart">
                    <ul>
                        {
                            commandes?.map((c: any) => (
                                <BookHisto
                                    imageUrl={`/${c?.Livre?.image}`}
                                    title={c?.Livre?.titre}
                                    category={c?.Livre?.Categorie?.nom}
                                    price={c?.total}
                                    priceUnit={c?.Livre?.prix}
                                    quantiteCommande={c?.quantite}
                                    idCommande={c?.id}
                                    idLivre={c?.Livre?.id}
                                />
                            ))
                        }
                    </ul>
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
            </div>
        </>
    )
}

export default Commande;