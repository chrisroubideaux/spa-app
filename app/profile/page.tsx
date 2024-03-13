// profile page
'use client';
// profile page
'use client';
import Link from 'next/link';
import axios from 'axios';
import { useEffect, useState } from 'react';
// import components
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/misc/Footer';

export default function Profile({}) {
  const [users, setUsers] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    axios
      .get(`https://ivy-database-87df4cfe65bb.herokuapp.com/users`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        if (response.status === 200) {
          setUsers(response.data.user);
        } else {
          setError(response.data.message);
        }
      })
      .catch((err) => {
        setError(null);
        console.error(err);
      });
  }, []);

  return (
    <>
      <div className="layout">
        <Navbar />
        <div className="container-fluid pt-5">
          {/* main content */}
          <div className="container text-center">
            <h4>You have successfully registered your account</h4>
            <Link className="btn btn-md w-100" href="/">
              Go to profile
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}