import React, { useState, useEffect } from 'react';

const Profile = () => {
    const [profileData, setProfileData] = useState(null);

    useEffect(() => {
        
        const storedProfile = localStorage.getItem('userProfile');
        if (storedProfile) {
            setProfileData(JSON.parse(storedProfile));
        }
    }, []);

    return (
        <div>
            <h2>Profile</h2>
            {profileData ? (
                <div>
                    <p>Username: {profileData.username}</p>
                    <p>Email: {profileData.email}</p>
                </div>
            ) : (
                <p>No profile data available</p>
            )}
        </div>
    );
};

export default Profile;
