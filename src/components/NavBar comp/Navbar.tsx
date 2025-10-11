import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';
import logo from '../../img/main/ChatGPT_Image_Oct_11__2025__02_43_04_PM-removebg-preview.png';

const Navbar: React.FC = () => {
    const navigate = useNavigate();

    const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("jwtToken"));


    useEffect(() => {
        const checkLoginStatus = () => {
            setIsLoggedIn(!!localStorage.getItem("jwtToken"));
        };

        window.addEventListener('storage', checkLoginStatus);

        return () => {
            window.removeEventListener('storage', checkLoginStatus);
        };
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("jwtToken");
        localStorage.removeItem("username");

        setIsLoggedIn(false);

        window.dispatchEvent(new Event('storage'));

        navigate("/");
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm px-4">
            <Link className="navbar-brand fw-bold text-primary d-flex align-items-center" to="/">
                <img
                    src={logo}
                    alt="DogShow Logo"
                    className="navbar-logo me-2"
                />
                {/*<span>DogShow</span>*/}
            </Link>
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
                        <Link className="nav-link" to="/">Home page</Link>
                    </li>

                    {isLoggedIn ? (
                        <li className="nav-item">
                            <button
                                className="nav-link btn btn-link"
                                onClick={handleLogout}
                                style={{ cursor: 'pointer' }}
                            >
                                Logout
                            </button>
                        </li>
                    ) : (
                        <>
                            <li className="nav-item">
                                <Link className="nav-link" to="/login">Login</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/register">Register</Link>
                            </li>
                        </>
                    )}

                    <li className="nav-item dropdown">
                        <button
                            className="nav-link dropdown-toggle btn btn-link"
                            id="informationDropdown"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            Information
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="informationDropdown">
                            <li>
                                <Link className="dropdown-item" to="/dogform">Dog Form</Link>
                            </li>
                            <li>
                                <Link className="dropdown-item" to="/pricelist">Service Price List</Link>
                            </li>
                            <li>
                                <Link className="dropdown-item" to="/about">About</Link>
                            </li>
                            <li>
                                <Link className="dropdown-item" to="/contact">Contact</Link>
                            </li>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/userprofile">Profile</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;