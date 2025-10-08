import React, { useEffect, useState } from "react";
import api from "../../services/api"; // Axios instance for API calls
import Navbar from "../NavBar comp/Navbar";

interface UserDisplayDto {
    id: number;
    userName: string;
    name: string;
    lastName: string;
    email: string;
    phone: string;
    address: string;
    city: string;
    postalCode: string;
    state: string;
}

const UserProfile: React.FC = () => {
    const [user, setUser] = useState<UserDisplayDto | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await api.get<UserDisplayDto>("/user/profile");
                setUser(response.data);
            } catch (err) {
                setError("Failed to fetch user data.");
            } finally {
                setLoading(false);
            }
        };

        fetchUserData();
    }, []);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (user) {
            setUser({ ...user, [e.target.name]: e.target.value });
        }
    };

    const handleUpdate = async () => {
        try {
            if (user) {
                await api.put(`/user/profile/${user.id}`, user);
                alert("Profile updated successfully.");
            }
        } catch {
            alert("Failed to update profile.");
        }
    };

    const handleDelete = async () => {
        try {
            if (user) {
                await api.delete(`/user/profile/${user.id}`);
                alert("Account deleted successfully.");
                // Redirect or clear user session
            }
        } catch {
            alert("Failed to delete account.");
        }
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <>
            <Navbar />
            <div style={{ maxWidth: "600px", margin: "0 auto", padding: "20px" }}>
                <h2>User Profile</h2>
                {user && (
                    <form>
                        <div>
                            <label>User Name:</label>
                            <input
                                type="text"
                                name="userName"
                                value={user.userName}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div>
                            <label>Name:</label>
                            <input
                                type="text"
                                name="name"
                                value={user.name}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div>
                            <label>Last Name:</label>
                            <input
                                type="text"
                                name="lastName"
                                value={user.lastName}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div>
                            <label>Email:</label>
                            <input
                                type="email"
                                name="email"
                                value={user.email}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div>
                            <label>Phone:</label>
                            <input
                                type="text"
                                name="phone"
                                value={user.phone}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div>
                            <label>Address:</label>
                            <input
                                type="text"
                                name="address"
                                value={user.address}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div>
                            <label>City:</label>
                            <input
                                type="text"
                                name="city"
                                value={user.city}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div>
                            <label>Postal Code:</label>
                            <input
                                type="text"
                                name="postalCode"
                                value={user.postalCode}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div>
                            <label>State:</label>
                            <input
                                type="text"
                                name="state"
                                value={user.state}
                                onChange={handleInputChange}
                            />
                        </div>
                        <button type="button" onClick={handleUpdate}>
                            Update Profile
                        </button>
                        <button type="button" onClick={handleDelete} style={{ marginLeft: "10px" }}>
                            Delete Account
                        </button>
                    </form>
                )}
            </div>
        </>
    );
};

export default UserProfile;