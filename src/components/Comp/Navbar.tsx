import React from 'react';
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm px-4">
            <a className="navbar-brand fw-bold text-primary" href="#">
                DogShow
            </a>
            <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                    {/* Changed to match the prototype's navigation */}
                    <li className="nav-item">
                        <a className="nav-link" href="#">Log in</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Sing up</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Forms</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Services</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">FCI Standards</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">News</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;