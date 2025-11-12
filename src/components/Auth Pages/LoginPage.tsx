import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../Services/api";
import "bootstrap/dist/css/bootstrap.min.css";

const LoginPage: React.FC = () => {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);
        setIsLoading(true);

        try {
            const response = await api.post<string>("User/login", { userName, password });
            const token = response.data;

            localStorage.setItem("jwtToken", token);
            localStorage.setItem("username", userName);

            navigate("/");
        } catch (err: any) {
            if (err.response && err.response.status === 401) {
                setError("Invalid username or password.");
            } else {
                setError("An unexpected error occurred. Please try again later.");
            }
        } finally {
            setIsLoading(false);
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
                    onChange={(e) => setUserName(e.target.value)}
                    required
                />
            </div>
            <div className="mb-3">
                <label className="form-label">Password:</label>
                <input
                    type="password"
                    className="form-control"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </div>
            <button
                type="submit"
                className="btn btn-primary w-100"
                disabled={isLoading}
            >
                {isLoading ? "Logging in..." : "Login"}
            </button>
            <div className="text-center mt-3">
                <span>Don't have an account? </span>
                <button
                    className="btn btn-link"
                    onClick={() => navigate("/register")}
                >
                    Register here
                </button>
            </div>
        </form>
    );
};

export default LoginPage;