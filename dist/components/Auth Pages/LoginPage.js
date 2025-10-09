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
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import "bootstrap/dist/css/bootstrap.min.css";
const LoginPage = () => {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const handleSubmit = (e) => __awaiter(void 0, void 0, void 0, function* () {
        e.preventDefault();
        setError(null);
        try {
            const response = yield api.post("User/login", { userName, password });
            const token = response.data;
            localStorage.setItem("jwtToken", token);
            localStorage.setItem("username", userName);
            navigate("/");
        }
        catch (err) {
            if (err.response && err.response.status === 401) {
                setError("Invalid username or password.");
            }
            else {
                setError("An unexpected error occurred. Please try again later.");
            }
        }
    });
    return (_jsxs("form", { onSubmit: handleSubmit, className: "container mt-5", style: { maxWidth: 400 }, children: [_jsx("h2", { className: "mb-4", children: "Login" }), error && _jsx("div", { className: "alert alert-danger", children: error }), _jsxs("div", { className: "mb-3", children: [_jsx("label", { className: "form-label", children: "Username:" }), _jsx("input", { type: "text", className: "form-control", value: userName, onChange: (e) => setUserName(e.target.value), required: true })] }), _jsxs("div", { className: "mb-3", children: [_jsx("label", { className: "form-label", children: "Password:" }), _jsx("input", { type: "password", className: "form-control", value: password, onChange: (e) => setPassword(e.target.value), required: true })] }), _jsx("button", { type: "submit", className: "btn btn-primary w-100", children: "Login" }), _jsxs("div", { className: "text-center mt-3", children: [_jsx("span", { children: "Don't have an account? " }), _jsx("button", { className: "btn btn-link", onClick: () => navigate("/register"), children: "Register here" })] })] }));
};
export default LoginPage;
