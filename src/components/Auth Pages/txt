import React, { useState } from "react";
import API_URL from "../../services/api";
import 'bootstrap/dist/css/bootstrap.min.css';

const RegisterPage: React.FC = () => {
    const [form, setForm] = useState({
        userName: "",
        password: "",
        name: "",
        lastName: "",
        email: "",
        phone: "",
        address: "",
        city: "",
        postalCode: "",
        state: ""
    });
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        setSuccess("");
        try {
            const response = await fetch(`${API_URL}/register`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });
            if (!response.ok) {
                const msg = await response.text();
                setError(msg || "Registration failed.");
                return;
            }
            setSuccess("Registration successful.");
            setForm({
                userName: "",
                password: "",
                name: "",
                lastName: "",
                email: "",
                phone: "",
                address: "",
                city: "",
                postalCode: "",
                state: ""
            });
        } catch {
            setError("Network error.");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="container mt-5" style={{ maxWidth: 500 }}>
            <h2 className="mb-4">Register</h2>
            {error && <div className="alert alert-danger">{error}</div>}
            {success && <div className="alert alert-success">{success}</div>}
            <div className="mb-3">
                <label className="form-label">Username</label>
                <input name="userName" type="text" className="form-control" value={form.userName} onChange={handleChange} required />
            </div>
            <div className="mb-3">
                <label className="form-label">Password</label>
                <input name="password" type="password" className="form-control" value={form.password} onChange={handleChange} required />
            </div>
            <div className="mb-3">
                <label className="form-label">Name</label>
                <input name="name" type="text" className="form-control" value={form.name} onChange={handleChange} required />
            </div>
            <div className="mb-3">
                <label className="form-label">Last Name</label>
                <input name="lastName" type="text" className="form-control" value={form.lastName} onChange={handleChange} required />
            </div>
            <div className="mb-3">
                <label className="form-label">Email</label>
                <input name="email" type="email" className="form-control" value={form.email} onChange={handleChange} required />
            </div>
            <div className="mb-3">
                <label className="form-label">Phone</label>
                <input name="phone" type="text" className="form-control" value={form.phone} onChange={handleChange} />
            </div>
            <div className="mb-3">
                <label className="form-label">Address</label>
                <input name="address" type="text" className="form-control" value={form.address} onChange={handleChange} />
            </div>
            <div className="mb-3">
                <label className="form-label">City</label>
                <input name="city" type="text" className="form-control" value={form.city} onChange={handleChange} />
            </div>
            <div className="mb-3">
                <label className="form-label">Postal Code</label>
                <input name="postalCode" type="text" className="form-control" value={form.postalCode} onChange={handleChange} />
            </div>
            <div className="mb-3">
                <label className="form-label">State</label>
                <input name="state" type="text" className="form-control" value={form.state} onChange={handleChange} />
            </div>
            <button type="submit" className="btn btn-success w-100">Register</button>
        </form>
    );
};

export default RegisterPage;