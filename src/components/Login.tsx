import React, { useState } from 'react';
import '../styles/Login.css';

const Login: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = (event: React.FormEvent) => {
        event.preventDefault();
        // Exemple de validation simple
        if (username === '' || password === '') {
            setError('Please fill in both fields.');
        } else {
            setError('');
            // Ajoutez ici votre logique de connexion
            console.log('Logging in with', { username, password });
        }
    };

    return (
        <div className="login-page">
            <div className="image-container">
            <h1><i>Bienvenue chez </i><br /> <b>LIBRARY</b> </h1>

                <img src="https://i.pinimg.com/736x/c6/ae/25/c6ae259e183859af09254c14832f2f93.jpg" alt="Library" />
            </div>
            <div className="login-container">
                <h2>Login</h2>
                <form onSubmit={handleLogin}>
                    <div className="form-group">
                        <label htmlFor="username">Nom d'utilisateur</label>
                        <input
                            type="text"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="@nom d'utilisateur"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Mot de passe</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="votre mot de passe"
                        />
                    </div>
                    {error && <p className="error">{error}</p>}
                    <button type="submit" className="login-button">Login</button>
                </form>
            </div>
        </div>
    );
};

export default Login;
