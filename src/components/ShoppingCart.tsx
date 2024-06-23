// ShoppingCart.tsx
import React, { useEffect, useState } from 'react';
import BookItem from './BookItem';
import '../styles/BookDetail.css';
import '../styles/Header.css';
import '../styles/Pannier.css';
import SearchBar from './SearchBar';
import CartSummary from './CartSummary';
import { getCommandePanier } from '../api';

const ITEMS_PER_PAGE = 3;

const ShoppingCart: React.FC = () => {

    const [currentPage, setCurrentPage] = useState(1);
    const [commandes, setCommandes] = useState<any>([]);
    const [totalPages, setTotalPages] = useState(1);
    const [search, setSearch] = useState("");

    const [totalComande, setTotalCommande] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    const [averagePrice, setAveragePrice] = useState(0);

    const getCommandes = async (pageNumber: number, pageSize: number, recherche?: string) => {
        try {
          const response = await getCommandePanier(pageNumber, pageSize, recherche);
          if(response.status === 200) {
            setCommandes(response.data.Commandes);
            setTotalPages(response.data.PageCount);
            setTotalCommande(response.data.TotalCount);
            getPrices(response.data.Commandes);
          }
        } catch (error) {
          console.error('Erreur lors de la récupération des commandes:', error);
        }
    }

    const getPrices = (data: any) => {
        var price = 0;
        var count = 0;
        data.map((c: any) => {
            price += c?.Livre?.prix;
            count += 1;
        })
        console.log("price", price);
        setTotalPrice(price);
        setAveragePrice(price/count);
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
                                <BookItem
                                    imageUrl={`/${c?.Livre?.image}`}
                                    title={c?.Livre?.titre}
                                    category={c?.Livre?.Categorie?.nom}
                                    price={c?.Livre?.prix}
                                    quantiteCommande={c?.quantite}
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
                <CartSummary 
                    totalComande = {totalComande}
                    totalPrice = {totalPrice}
                    averagePrice = {averagePrice}
                />
            </div>

        </>
    );
}

export default ShoppingCart;
