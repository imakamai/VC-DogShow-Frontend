import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import Navbar from '../NavBar comp/Navbar';

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
    const [updatedUser, setUpdatedUser] = useState<User | null>(null);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await api.get<User>('User/my');
                setUser(response.data);
                setUpdatedUser(response.data);
            } catch (err: any) {
                setError(err.response?.data || 'Failed to fetch user data');
            } finally {
                setLoading(false);
            }
        };

        fetchUserData();
    }, []);

    const handleUpdate = async () => {
        try {
            if (updatedUser) {
                await api.put('User/my', updatedUser);
                setUser(updatedUser);
                setIsEditing(false);
            }
        } catch (err) {
            alert('Failed to update user data');
        }
    };

    const handleDelete = async () => {
        if (window.confirm('Are you sure you want to delete your account?')) {
            try {
                await api.delete('User/my');
                alert('Account deleted successfully');
                setUser(null);
            } catch (err) {
                alert('Failed to delete account');
            }
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!user) {
        return <div>No user data available</div>;
    }

    return (
        <div>
            <Navbar />
            <div style={{ maxWidth: '400px', margin: '20px auto', padding: '20px', border: '1px solid #ccc', borderRadius: '8px', boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)' }}>
                <h2 style={{ textAlign: 'center' }}>User Profile</h2>
                <p><strong>Username:</strong> {user.username || ''}</p>
                <p><strong>Name:</strong> {user.name || ''} {user.lastName || ''}</p>
                <p><strong>Email:</strong> {user.email || ''}</p>
                <p><strong>Phone:</strong> {user.phone || ''}</p>
                <p><strong>Address:</strong> {user.address || ''}</p>
                <p><strong>City:</strong> {user.city || ''}</p>
                <p><strong>Postal Code:</strong> {user.postalCode || ''}</p>
                <p><strong>State:</strong> {user.state || ''}</p>
                <button onClick={() => setIsEditing(true)} style={{ marginRight: '10px' }}>Edit</button>
                <button onClick={handleDelete} style={{ backgroundColor: 'red', color: 'white' }}>Delete Account</button>
            </div>

            {isEditing && (
                <div style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    zIndex: 1000
                }}>
                    <div style={{
                        backgroundColor: 'white',
                        padding: '20px',
                        borderRadius: '8px',
                        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)',
                        width: '90%',
                        maxWidth: '500px'
                    }}>
                        <h3>Edit Profile</h3>
                        <input type="text" placeholder="Username" value={updatedUser?.username || ''} onChange={(e) => setUpdatedUser({ ...updatedUser!, username: e.target.value })} />
                        <input type="text" placeholder="Name" value={updatedUser?.name || ''} onChange={(e) => setUpdatedUser({ ...updatedUser!, name: e.target.value })} />
                        <input type="text" placeholder="Last Name" value={updatedUser?.lastName || ''} onChange={(e) => setUpdatedUser({ ...updatedUser!, lastName: e.target.value })} />
                        <input type="email" placeholder="Email" value={updatedUser?.email || ''} onChange={(e) => setUpdatedUser({ ...updatedUser!, email: e.target.value })} />
                        <input type="text" placeholder="Phone" value={updatedUser?.phone || ''} onChange={(e) => setUpdatedUser({ ...updatedUser!, phone: e.target.value })} />
                        <input type="text" placeholder="Address" value={updatedUser?.address || ''} onChange={(e) => setUpdatedUser({ ...updatedUser!, address: e.target.value })} />
                        <input type="text" placeholder="City" value={updatedUser?.city || ''} onChange={(e) => setUpdatedUser({ ...updatedUser!, city: e.target.value })} />
                        <input type="text" placeholder="Postal Code" value={updatedUser?.postalCode || ''} onChange={(e) => setUpdatedUser({ ...updatedUser!, postalCode: e.target.value })} />
                        <input type="text" placeholder="State" value={updatedUser?.state || ''} onChange={(e) => setUpdatedUser({ ...updatedUser!, state: e.target.value })} />
                        <div style={{ marginTop: '10px' }}>
                            <button onClick={handleUpdate} style={{ marginRight: '10px' }}>Save</button>
                            <button onClick={() => setIsEditing(false)}>Cancel</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default UserProfilePage;