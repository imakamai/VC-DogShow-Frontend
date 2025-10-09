var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import api from '../../services/api';
const RegisterPage = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        lastName: '',
        email: '',
        username: '',
        password: '',
    });
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);
    const handleChange = (e) => {
        setFormData(Object.assign(Object.assign({}, formData), { [e.target.name]: e.target.value }));
    };
    const handleRegister = (e) => __awaiter(void 0, void 0, void 0, function* () {
        var _a;
        e.preventDefault();
        setError(null);
        setSuccess(null);
        if (formData.password !== confirmPassword) {
            setError("Passwords do not match!");
            return;
        }
        try {
            yield api.post('User', formData);
            setSuccess("Registration successful! You can now log in.");
            setTimeout(() => {
                navigate('/login');
            }, 500);
        }
        catch (err) {
            const errorMessage = ((_a = err.response) === null || _a === void 0 ? void 0 : _a.data) || "An error occurred during registration.";
            setError(errorMessage);
        }
    });
    return (_jsx("div", { className: "container mt-5", children: _jsx("div", { className: "row justify-content-center", children: _jsx("div", { className: "col-md-6", children: _jsxs("div", { className: "card shadow-lg", children: [_jsx("div", { className: "card-header bg-primary text-white text-center", children: _jsx("h2", { children: "Register" }) }), _jsxs("div", { className: "card-body p-4", children: [_jsxs("form", { onSubmit: handleRegister, children: [error && _jsx("div", { className: "alert alert-danger", children: error }), success && _jsx("div", { className: "alert alert-success", children: success }), _jsxs("div", { className: "row mb-3", children: [_jsxs("div", { className: "col-md-6", children: [_jsx("label", { className: "form-label", children: "First Name" }), _jsx("input", { type: "text", className: "form-control", name: "name", value: formData.name, onChange: handleChange, required: true })] }), _jsxs("div", { className: "col-md-6", children: [_jsx("label", { className: "form-label", children: "Last Name" }), _jsx("input", { type: "text", className: "form-control", name: "lastName", value: formData.lastName, onChange: handleChange, required: true })] })] }), _jsxs("div", { className: "mb-3", children: [_jsx("label", { className: "form-label", children: "Username" }), _jsx("input", { type: "text", className: "form-control", name: "username", value: formData.username, onChange: handleChange, required: true })] }), _jsxs("div", { className: "mb-3", children: [_jsx("label", { className: "form-label", children: "Email" }), _jsx("input", { type: "email", className: "form-control", name: "email", value: formData.email, onChange: handleChange, required: true })] }), _jsxs("div", { className: "row mb-4", children: [_jsxs("div", { className: "col-md-6", children: [_jsx("label", { className: "form-label", children: "Password" }), _jsx("input", { type: "password", className: "form-control", name: "password", value: formData.password, onChange: handleChange, required: true, minLength: 6 })] }), _jsxs("div", { className: "col-md-6", children: [_jsx("label", { className: "form-label", children: "Confirm Password" }), _jsx("input", { type: "password", className: "form-control", name: "confirmPassword", value: confirmPassword, onChange: (e) => setConfirmPassword(e.target.value), required: true })] })] }), _jsx("button", { type: "submit", className: "btn btn-primary w-100", children: "Register" })] }), _jsxs("p", { className: "mt-3 text-center", children: ["Already have an account? ", _jsx(Link, { to: "/login", children: "Log in here" })] })] })] }) }) }) }));
};
export default RegisterPage;
