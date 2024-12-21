import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Profile.css'

const Profile = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchProfile = async () => {
            const token = localStorage.getItem('token');
            if (token) {
                try {
                    const response = await axios.get('http://localhost:5000/api/profile', {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    });
                    setUser(response.data.user);
                } catch (error) {
                    console.error('Error fetching profile', error);
                }
            }
        };
        fetchProfile();
    }, []);

    if (!user) return <div>Loading...</div>;

    return (
        <div className="profile-container">
            <h2>Profile</h2>
            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Phone:</strong> {user.phone}</p>
            <p><strong>City:</strong> {user.city}</p>
            <p><strong>Message:</strong> {user.message}</p>
        </div>
    );
};

export default Profile;
