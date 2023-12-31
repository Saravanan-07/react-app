
import React, { useState, useEffect } from 'react';

const UserProfile = () => {

  const [userProfile, setUserProfile] = useState({
    username: '',
    email: '',
   
  });

 
  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
       
        const response = await fetch('https://api.example.com/user-profile');
        const data = await response.json();

      
        setUserProfile(data.profile);
      } catch (error) {
        console.error('Error fetching user profile:', error);
      }
    };

  
    fetchUserProfile();
  }, []);

  return (
    <div>
      <h2>User Profile</h2>
      <p>Username: {userProfile.username}</p>
      <p>Email: {userProfile.email}</p>
      
      <form>
        <label>
          New Username:
          <input type="text" />
        </label>
        <label>
          New Email:
          <input type="email" />
        </label>
        
        <button type="submit">Update Profile</button>
      </form>
    </div>
  );
};

export default UserProfile;
