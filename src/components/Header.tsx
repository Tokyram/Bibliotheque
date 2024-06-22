import React from 'react';
import '../styles/Header.css';

const Header: React.FC = () => {
    return (
        <header>
            <div className="logo">
                <img src="./logo.png" alt="Logo" />
            </div>
            <nav>
                <a href="/">Accueil</a>
                <a href="/pannier">Pannier</a>
                <a href="/login">Se connecter</a>
                <div className="user-profile">
                    <img src="https://i.pinimg.com/280x280_RS/7a/4e/e0/7a4ee0c1675940a9ff5cc2c79b629048.jpg" alt="User Profile" />
                    <span>John Doe</span>
                </div>
            </nav>
        </header>
    );
}

export default Header;
