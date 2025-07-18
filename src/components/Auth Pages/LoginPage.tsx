import React, { useState } from "react";
import { Link } from "react-router-dom";
import API_URL from "../../services/api";
import 'bootstrap/dist/css/bootstrap.min.css';

const LoginPage: React.FC = () => {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        try {
            const response = await fetch(`${API_URL}/login`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ userName, password }),
            });
            if (!response.ok) {
                const data = await response.text();
                setError(data || "Login failed.");
                return;
            }
            const data = await response.json();
            localStorage.setItem("token", data.token);
        } catch {
            setError("Network error.");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="container mt-5" style={{ maxWidth: 400 }}>
            <h2 className="mb-4">Login</h2>
            {error && <div className="alert alert-danger">{error}</div>}
            <div className="mb-3">
                <label className="form-label">Username:</label>
                <input
                    type="text"
                    className="form-control"
                    value={userName}
                    onChange={e => setUserName(e.target.value)}
                    required
                />
            </div>
            <div className="mb-3">
                <label className="form-label">Password:</label>
                <input
                    type="password"
                    className="form-control"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    required
                />
            </div>
            <button type="submit" className="btn btn-primary w-100">Login</button>
            <div className="text-center mt-3">
                <span>Don't have an account? </span>
                <Link to="/register">Register here</Link>
            </div>
        </form>
    );
};

export default LoginPage;