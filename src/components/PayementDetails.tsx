import React, { useEffect, useState } from 'react';
import '../styles/Payement.css';
import { confirmCommande, getRegions } from '../api';
import { jwtDecode } from 'jwt-decode';
import { useNavigate } from 'react-router-dom';
import '../styles/Modal.css';

const PayementDetails: React.FC<any> = ({idLivre, quantite, idCommande}) => {

    const navigate = useNavigate();

    const [regions, setRegions] = useState<any>([]);
    const [user, setUser] = useState<any>();

    const [carte, setCarte] = useState("");
    const [region, setRegion] = useState("");

    const [responseFacture, setResponseFacture] = useState<any>();
    const [showModalConf, setShowModalConf] = useState(false);

    const getRegion = async () => {
        try {
            const response = await getRegions();
            if(response.status === 200) {
                setRegions(response.data)
            }
        } catch (error) {
            console.error('Erreur lors de la récupération des régions:', error);
        }
    }

    const decodedToken = () => {
        const token = localStorage.getItem('token');
        if (token) {
            const decodedToken = jwtDecode(token) as any;
            console.log("user", decodedToken);
            setUser(decodedToken);
        }
    }

    const handleConfirm = async (event: React.FormEvent) => {

        try {
            event.preventDefault();
            const params = {
                idCommande: idCommande,
                idLivre: idLivre,
                quantite: Number(quantite),
                carte: carte,
                idRegion: Number(region)
            }
    
            console.log(params);
            const response = await confirmCommande(params);
            if(response.status === 200) {
                alert(response.data.message);
                setResponseFacture(response.data);
                setShowModalConf(true);
                // navigate("/")
            }
        }
        catch (error: any) {
            alert(error.response.data)
            console.error('Erreur lors de l ajout commande :', error.response.data);
        }
    }

    const handleContinue = () => {
        setShowModalConf(false);
        navigate("/");
    }

    useEffect(() => {
        getRegion();
        decodedToken();
    },[]);

  return (
    <>
    <div className='pp'>
    <div className="pay">
            <form className="form" onSubmit={handleConfirm}>
              <div className="separator">
                  <h2>Votre Payement now</h2>
                  <div className="credit-card-info--form">
                      <div className="input_container">
                          <label htmlFor="cardholder_name" className="input_label">Region</label>
                            <select
                                name="input-name"
                                className='input_field'
                                id="cardholder_name"
                                value={region}
                                onChange={(e) => setRegion(e.target.value)}
                            >
                                <option value="" disabled>Choose a region</option>
                                {regions.map((r: any) => (
                                    <option key={r.id} className='input_field' value={r.id}>{r.nom}</option>
                                ))}
                            </select>
                          {/* <input id="cardholder_name" className="input_field" type="text" name="input-name" title="Input title" placeholder="Enter your full name" /> */}
                      </div>

                      <div className="input_container">
                          <label htmlFor="card_number" className="input_label">Card Number</label>
                          <input id="card_number" className="input_field" type="text" name="input-name" value={carte} onChange={(e) => setCarte(e.target.value)} title="Input title" placeholder="0000 0000 0000 0000" />
                      </div>


                  </div>
              </div>

              <button className="purchase--btn">Checkout</button>

          </form>
        </div>
        <div className="pay2">
              <form className="form">
                  <div className="separator">
                      <h2>Vos informations supplémentaires</h2>
                      <div className="credit-card-info--form">
                        {user ? (
                        <>
                            <p><b>Nom:</b> {user?.['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name'] || 'Non spécifié'}</p>
                            <p><b>Prenom:</b> {user?.['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/surname'] || 'Non spécifié'}</p>
                            <p><b>Numero:</b> {user?.['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress'] || 'Non spécifié'}</p>
                            <p><b>Adresse:</b> {user?.['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/locality'] || 'Non spécifiée'}</p>
                        </>
                        ) : (
                        <p>Chargement des informations utilisateur...</p>
                        )}
                      </div>
                  </div>
                </form>
            </div>
        </div>
        {
            showModalConf && (
                <div className="modal show">
                    <div className="modal-content show">
                        <h4>Notifcations</h4>
                        <p>Votre commande est validé et payé.</p>
                        <p>La date de livraison sera le {responseFacture?.paiement?.dateLivraison}</p>
                        <button className="cancel-btn">Exporter la facture en PDF</button>
                        <div className="button">
                            <button className="confirm-btn" onClick={handleContinue}>OK</button>
                        </div>
                    </div>
                </div>
            )
        }
        </>
    );
};

export default PayementDetails;
