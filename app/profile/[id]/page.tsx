// profile.tsx
'use client'
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import axios from 'axios';

type User = {
  _id: string;
  email: string;
  fullName: string;
  // Add other properties as needed
};


const Profile = () => {
  const router = useRouter();
  const { id } = router.query;
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const accessToken = ''; // Replace YOUR_JWT_TOKEN with the actual JWT token

    const fetchUser = async () => {
      try {
        const response = await axios.get<User>(`https://ivy-database-87df4cfe65bb.herokuapp.com/user/profile`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        setUser(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching user:', error);
        setLoading(false);
      }
    };

    if (id) {
      fetchUser();
    }
  }, [id]);

  return (
    <div className="container mt-5">
      <h1 className="mb-4">User Profile</h1>
      {loading ? (
        <p>Loading...</p>
      ) : user ? (
        <div>
          <p>ID: {user._id}</p>
          <p>Email: {user.email}</p>
          <p>Full Name: {user.fullName}</p>
          {/* Render other user profile information here */}
        </div>
      ) : (
        <p>User not found</p>
      )}
    </div>
  );
};

export default Profile;
