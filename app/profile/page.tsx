// profile page
'use client';
// pages/profile/[id].js
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Profile = () => {
  const router = useRouter();
  const { id } = router.query;
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    if (id) {
      axios.get(`https://your-api-url.com/users/${id}`)
        .then(response => {
          setUserData(response.data);
        })
        .catch(error => {
          console.error('Error fetching user data:', error);
        });
    }
  }, [id]);

  if (typeof window === 'undefined') {
    return null; // Don't render anything during server-side rendering
  }

if (!userData) {
    return <div>Loading...</div>;
}

return (
    <div>
        <h1>Profile</h1>
        <p>User ID: {(userData as { id: string }).id}</p>
        <p>Email: {(userData as { id: string; email: string; fullName: string; }).email}</p>
        <p>Full Name: {(userData as { id: string; email: string; fullName: string; }).fullName}</p>
        {/* Add other user data here */}
    </div>
);
};

export default Profile;
