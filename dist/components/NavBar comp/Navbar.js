import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
const Navbar = () => {
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
    return (_jsxs("nav", { className: "navbar navbar-expand-lg navbar-light bg-light shadow-sm px-4", children: [_jsx(Link, { className: "navbar-brand fw-bold text-primary", to: "/", children: "DogShow" }), _jsx("button", { className: "navbar-toggler", type: "button", "data-bs-toggle": "collapse", "data-bs-target": "#navbarNav", "aria-controls": "navbarNav", "aria-expanded": "false", "aria-label": "Toggle navigation", children: _jsx("span", { className: "navbar-toggler-icon" }) }), _jsx("div", { className: "collapse navbar-collapse", id: "navbarNav", children: _jsxs("ul", { className: "navbar-nav ms-auto", children: [_jsx("li", { className: "nav-item", children: _jsx(Link, { className: "nav-link", to: "/", children: "Home page" }) }), isLoggedIn ? (_jsx("li", { className: "nav-item", children: _jsx("button", { className: "nav-link btn btn-link", onClick: handleLogout, style: { cursor: 'pointer' }, children: "Logout" }) })) : (_jsxs(_Fragment, { children: [_jsx("li", { className: "nav-item", children: _jsx(Link, { className: "nav-link", to: "/login", children: "Login" }) }), _jsx("li", { className: "nav-item", children: _jsx(Link, { className: "nav-link", to: "/register", children: "Register" }) })] })), _jsxs("li", { className: "nav-item dropdown", children: [_jsx("button", { className: "nav-link dropdown-toggle btn btn-link", id: "informationDropdown", "data-bs-toggle": "dropdown", "aria-expanded": "false", children: "Information" }), _jsxs("ul", { className: "dropdown-menu", "aria-labelledby": "informationDropdown", children: [_jsx("li", { children: _jsx(Link, { className: "dropdown-item", to: "/dogform", children: "Dog Form" }) }), _jsx("li", { children: _jsx(Link, { className: "dropdown-item", to: "/pricelist", children: "Service Price List" }) }), _jsx("li", { children: _jsx(Link, { className: "dropdown-item", to: "/about", children: "About" }) }), _jsx("li", { children: _jsx(Link, { className: "dropdown-item", to: "/contact", children: "Contact" }) })] })] }), _jsx("li", { className: "nav-item", children: _jsx(Link, { className: "nav-link", to: "/userprofile", children: "Profile" }) })] }) })] }));
};
export default Navbar;
