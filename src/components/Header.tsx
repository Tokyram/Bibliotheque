import React, { useEffect, useState } from 'react';
import '../styles/Header.css';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';

const Header: React.FC = () => {

    const [user, setUser] = useState<any>();

    const navigate = useNavigate();
    
    const handleDeconnection = (event: React.FormEvent) => {
        event.preventDefault();
        localStorage.removeItem('token');
        navigate('/login');
    }

    const decodedToken = () => {
        const token = localStorage.getItem('token');
        if (token) {
            const decodedToken = jwtDecode(token) as any;
            console.log("user", decodedToken);
            setUser(decodedToken);
        }
    }

    useEffect(() => {
        decodedToken();
    },[]);

    return (
        <header>
            <div className="logo">
                <img src="/logo.png" alt="Logo" />
            </div>
            <nav>
                <a href="/">Accueil</a>
                <a href="/panier">Panier</a>
                <a href="/historique">Historique commandes</a>
                <a href="#" onClick={handleDeconnection}>Déconnexion</a>
                <div className="user-profile">
                    <img src="https://i.pinimg.com/280x280_RS/7a/4e/e0/7a4ee0c1675940a9ff5cc2c79b629048.jpg" alt="User Profile" />
                    <span>{user?.['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name'] || 'Non spécifié'} {user?.['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/surname'] || 'Non spécifié'}</span>
                </div>
            </nav>
        </header>
    );
}

export default Header;
