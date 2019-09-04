import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to='/' className="navbar-brand">
                Ubear Eats Clone App
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to='/login' className="nav-link">
                            Iniciar Sesión
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/register' className="nav-link">
                            Registrarse
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/restaurants' className="nav-link">
                            Restaurants
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar
