import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../services/api';
import Navbar from '../NavBar comp/Navbar';
import './UserProfilePage.css';

interface User {
    id: string;
    username: string;
    name: string;
    lastName: string;
    email: string;
    phone?: string;
    address?: string;
    city?: string;
    postalCode?: string;
    state?: string;
}

const UserProfilePage: React.FC = () => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [isEditing, setIsEditing] = useState<boolean>(false);
    const [editedUser, setEditedUser] = useState<User | null>(null);
    const navigate = useNavigate();
    const [showNotLoggedInMessage, setShowNotLoggedInMessage] = useState<boolean>(false);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await api.get<User>('User/my');
                setUser(response.data);
            } catch (err: any) {
                if (err.response?.status === 401) {
                    setShowNotLoggedInMessage(true);
                    setTimeout(() => {
                        navigate('/login');
                    }, 2000); // Show the message for 2 seconds before redirecting
                } else {
                    setError(err.response?.data || 'Failed to fetch user data');
                }
            } finally {
                setLoading(false);
            }
        };
        fetchUserData();
    }, [navigate]);

    if (showNotLoggedInMessage) {
        return <div>User is not logged in. Redirecting to login page...</div>;
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (editedUser) {
            setEditedUser({ ...editedUser, [e.target.name]: e.target.value });
        }
    };

    const saveChanges = async () => {
        if (editedUser) {
            try {
                await api.put(`User/${editedUser.id}`, editedUser);
                setUser(editedUser);
                setIsEditing(false);
            } catch (err) {
                alert('Failed to save changes.');
            }
        }
    };

    const deleteUser = async () => {
        if (user) {
            try {
                await api.delete(`User/${user.id}`);
                alert('User deleted successfully.');
                setUser(null);
            } catch (err) {
                alert('Failed to delete user.');
            }
        }
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    if (!user) return <div>No user data available</div>;

    return (
        <div className="user-profile-page">
            <Navbar/>

            {/* === Basic info === */}
            <section className="user-section">
                <h3 className="section-title">My Information</h3>
                <div className="info-container">
                    <div className="info-bubble">
                        <div className="user-avatar"></div>
                        <div className="user-details">
                            <p><strong>Full Name:</strong> {user.name} {user.lastName}</p>
                            <p><strong>Email:</strong> {user.email}</p>
                            <p><strong>Username:</strong> {user.username}</p>
                        </div>
                    </div>

                    <div className="action-bubble">
                        <button onClick={() => setIsEditing(true)}>Edit</button>
                        <button onClick={deleteUser} className="delete-btn">Delete</button>
                    </div>
                </div>
            </section>

            {/* === Address info === */}
            <section className="user-section second">
                <h3 className="section-title">Address Information</h3>
                <div className="info-container large">
                    <div className="info-bubble second">
                        <p><strong>Phone:</strong> {user.phone || '—'}</p>
                        <p><strong>Address:</strong> {user.address || '—'}</p>
                        <p><strong>City:</strong> {user.city || '—'}</p>
                        <p><strong>Postal Code:</strong> {user.postalCode || '—'}</p>
                        <p><strong>State:</strong> {user.state || '—'}</p>
                    </div>
                </div>

                {/* === Card info === */}
                <h4 className="section-subtitle">Card info.</h4>
                <div className="info-container small">
                    <div className="info-bubble second">
                        <p><strong>Cardholder Name:</strong> ———</p>
                        <p><strong>Card Number:</strong> ———</p>
                        <p><strong>Expiry Date:</strong> ———</p>
                        <p><strong>CVV:</strong> —</p>
                    </div>

                    <div className="action-bubble">
                        <button>Edit</button>
                        <button>Logout</button>
                        <button className="delete-btn">Delete</button>
                    </div>
                </div>
            </section>

            {/* === Edit Bubble === */}
            {isEditing && (
                <div className="edit-bubble">
                <h3>Edit Information</h3>
                    <label>
                        Full Name: <input type="text" name="name" value={editedUser?.name || ''} onChange={handleInputChange} />
                    </label>
                    <label>
                        Last Name: <input type="text" name="lastName" value={editedUser?.lastName || ''} onChange={handleInputChange} />
                    </label>
                    <label>
                        Email: <input type="text" name="email" value={editedUser?.email || ''} onChange={handleInputChange} />
                    </label>
                    <label>
                        Username: <input type="text" name="username" value={editedUser?.username || ''} onChange={handleInputChange} />
                    </label>
                    <div className="edit-actions">
                        <button onClick={saveChanges}>Save</button>
                        <button onClick={() => setIsEditing(false)}>Cancel</button>
                    </div>
                </div>
            )}

            {/* === Footer === */}
            {/*<section className="contact-section">*/}
            {/*    <div className="contact-box">*/}
            {/*        <h3>Contact</h3>*/}
            {/*    </div>*/}
            {/*</section>*/}
            <footer className="footer-section">
                <div className="footer-box">
                    <h3>Contact</h3>
                </div>
            </footer>
        </div>
    );
};

export default UserProfilePage;
