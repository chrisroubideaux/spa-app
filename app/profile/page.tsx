// profile page
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import axios from 'axios';



const ProfilePage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`https://ivy-database-87df4cfe65bb.herokuapp.com/users/${id}`);
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
          <p>ID: {(user as any).id}</p>
          <p>Email: {(user as any).email}</p>
          <p>Full Name: {(user as any).fullName}</p>
          {/* Render other user profile information here */}
        </div>
      ) : (
        <p>User not found</p>
      )}
    </div>
  );
};

export default ProfilePage;
