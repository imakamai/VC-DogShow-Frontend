import React from 'react';

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
                    <li className="nav-item">
                        <a className="nav-link" href="/">Home page</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/login">Login</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/register">Register</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a
                            className="nav-link dropdown-toggle"
                            href="#"
                            id="informationDropdown"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            Information
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="informationDropdown">
                            <li>
                                <a className="dropdown-item" href="/dogform">Dog Form</a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="/about">About</a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="/contact">Contact</a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;