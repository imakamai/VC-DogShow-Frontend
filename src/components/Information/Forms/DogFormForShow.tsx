import React, { useState } from "react";
import api from "../../../services/api";
import Navbar from "../../Comp/Navbar";
import "./css/DogForm.css";

const DogRegistrationForm: React.FC = () => {
    const [form, setForm] = useState({
        dogFullName: "",
        breed: "",
        ageOrBirth: "",
        gender: "",
        pedigreeNumber: "",
        photo: null as File | null,
        ownerFullName: "",
        email: "",
        address: "",
        city: "",
        postalCode: "",
        country: "",
        phoneNumber: "",
        competitionClass: "",
    });
    const [message, setMessage] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setForm({ ...form, photo: e.target.files[0] });
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setMessage("");

        const formData = new FormData();
        Object.entries(form).forEach(([key, value]) => {
            if (value !== null) {
                formData.append(key, value as string | Blob);
            }
        });

        try {
            const response = await api.post("dogs/register", formData, {
                headers: { "Content-Type": "multipart/form-data" },
            });
            setMessage("Registration successful!");
        } catch (error) {
            setMessage("Registration failed. Please try again.");
        }
    };

    return (
        <div className="dog-registration-page">
            <Navbar />
            <div className="form-container">
                <form onSubmit={handleSubmit} style={{ maxWidth: 600, margin: "0 auto" }}>
                    <h2>Dog Show Entry Form</h2>
                    {message && <div>{message}</div>}
                    <div>
                        <label>Dog Full Name:</label>
                        <input
                            type="text"
                            name="dogFullName"
                            value={form.dogFullName}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label>Breed:</label>
                        <input
                            type="text"
                            name="breed"
                            value={form.breed}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label>Age/Birth:</label>
                        <input
                            type="text"
                            name="ageOrBirth"
                            value={form.ageOrBirth}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label>Gender:</label>
                        <select name="gender" value={form.gender} onChange={handleChange} required>
                            <option value="">Select Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                    </div>
                    <div>
                        <label>Pedigree Number:</label>
                        <input
                            type="text"
                            name="pedigreeNumber"
                            value={form.pedigreeNumber}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label>Photo of Dog:</label>
                        <input
                            type="file"
                            name="photo"
                            accept="image/*"
                            onChange={handleFileChange}
                            required
                        />
                    </div>
                    <div>
                        <label>Owner's Full Name:</label>
                        <input
                            type="text"
                            name="ownerFullName"
                            value={form.ownerFullName}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label>Email:</label>
                        <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label>Address:</label>
                        <input
                            type="text"
                            name="address"
                            value={form.address}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label>City:</label>
                        <input
                            type="text"
                            name="city"
                            value={form.city}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label>Postal Code:</label>
                        <input
                            type="text"
                            name="postalCode"
                            value={form.postalCode}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label>Country:</label>
                        <input
                            type="text"
                            name="country"
                            value={form.country}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label>Phone Number:</label>
                        <input
                            type="tel"
                            name="phoneNumber"
                            value={form.phoneNumber}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label>Class for Competition:</label>
                        <select
                            name="competitionClass"
                            value={form.competitionClass}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Select Class</option>
                            <option value="Puppy">Puppy</option>
                            <option value="Junior">Junior</option>
                            <option value="Adult">Adult</option>
                            <option value="Veteran">Veteran</option>
                        </select>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default DogRegistrationForm;