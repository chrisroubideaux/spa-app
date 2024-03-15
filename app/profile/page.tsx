// profile page
'use client';

import axios from 'axios';
import { useEffect, useState } from 'react';
// import components
import Navbar from '@/components/navbar/Navbar';
import ProfileButton from '@/components/profile/ProfileButton';
import Footer from '@/components/misc/Footer';

type User = {
  _id: number;
  fullName: string;
  phone: string;
  email: string;
  image: string;
};


export default function Profiles({}) {

  const [user, setUser] = useState<User[]>([]);
  const [error, setError] = useState<string | null>(null);


  useEffect(() => {
    const token = localStorage.getItem('token');
    axios
      .get(`https://ivy-database-87df4cfe65bb.herokuapp.com/user`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        if (response.status === 200) {
          setUser(response.data.user);
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
        <div className="container-fluid">
          <Navbar />
        </div>
            <div className="container-fluid ">
              <div className="row py-4">
                <div className="col-md-6">
                  {user.map((user) => (
                    <div key={user._id} className="pt-4 ">
                      <ProfileButton user={user} />
                    </div>
                  ))}
                </div>
                <div className="col-lg-6">
                  <h3 className="text-center fs-1 fw-bold "></h3>
                  <p className="d-flex justify-content-end fw-normal fs-5 mt-5 lh-3">
                  test
                  </p>
                </div>
              </div>
            </div>
        
          </div>
          <Footer />
    </>
  );
}