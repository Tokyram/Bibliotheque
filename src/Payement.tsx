import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import PayementDetails from './components/PayementDetails';
import { useLocation } from 'react-router-dom';

const Payement: React.FC = () => {

  const location = useLocation();
  const [paymentData, setPaymentData] = useState<{idLivre: number, quantite: number, idCommande: number} | null>(null);

  useEffect(() => {
    if (location.state) {
      const { idLivre, quantite, idCommande } = location.state as { idLivre: number, quantite: number, idCommande: number };
      setPaymentData({ idLivre, quantite, idCommande });
      console.log("State", idLivre, quantite, idCommande);
    }
  }, [location.state]);

  return (
    
      <>
      
      <Header />
      <PayementDetails
       idLivre={paymentData?.idLivre}
       quantite={paymentData?.quantite}
       idCommande={paymentData?.idCommande}
      />
      <Footer />
      
      </>
  );
}

export default Payement;