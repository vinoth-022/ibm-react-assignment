import axios from 'axios';
import React, { useState, useEffect } from 'react';

const Profile = () => {
    const storedProfile = JSON.parse(localStorage.getItem('currentProfile'));

    const [profileData, setProfileData] = useState({ ...storedProfile, password: '' });
    console.log(profileData)

    // useEffect(() => {
    //     console.log(localStorage.getItem('currentProfile'));

    //     const storedProfile = localStorage.getItem('currentProfile');
    //     if (storedProfile) {
    //         setProfileData(JSON.parse(storedProfile));
    //     }
    // }, []);


    const handleUpdateInput = (evt) => {
        setProfileData({
            ...profileData,
            [evt.target.name]: evt.target.value
        })
    }

    const handleUpdateSubmit = async (evt) => {
        evt.preventDefault()

        try {
            await axios.put(`http://localhost:5000/update`, profileData)
                .then(response => 
                    console.log(response.data.message))
        } catch (error) {
            console.error(error)
        }
    };

    return (
        <div>
            <h2>Profile</h2>
            {profileData ? (
                // <div>
                //     <p>Username: {profileData.username}</p>
                //     <p>Email: {profileData.email}</p>
                // </div>
                <>
                    <form onSubmit={handleUpdateSubmit}>
                        <label htmlFor="username">User Name: </label>
                        <input type="text" name="username" id="firstname" value={profileData.username} onChange={handleUpdateInput} />
                        <br />
                        <label htmlFor="email">Email: </label>
                        <input type="email" name="email" id="email" value={profileData.email} onChange={handleUpdateInput} />
                        <br />
                        <label htmlFor="password">Password: </label>
                        <input type="password" name="password" id="password" value={profileData.password} onChange={handleUpdateInput} placeholder="Enter Password" />
                        <br />

                        <input type="submit" value="Update" />
                    </form>
                </>
            ) : (
                <p>No profile data available</p>
            )}
        </div>
    );
};

export default Profile;
