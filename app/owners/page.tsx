// owner page
'use client';
import axios from 'axios';
import { useState, useEffect } from 'react';
// component imports
import Navbar from '@/components/navbar/Navbar';
import Cover from '@/components/owners/Cover';
//import Banner from '@/components/owners/Banner';
import Cards from '@/components/owners/Cards';
import Reviews from '@/components/massages/Reviews';
import Details from '@/components/misc/Details';
import Footer from '@/components/misc/Footer';

type Owners = {
  _id: number;
  title: string;
  name: string;
  email: string;
  phone: string;
  experience: string; 
  bio: string;
  photo: string;
  image: string;
  image2: string; 
}
const Owners = () => {
  const [owners, setOwners] = useState<Owners[]>([]);

  useEffect(() => {
    axios
      .get('https://ivy-database-87df4cfe65bb.herokuapp.com/owners')
      .then((response) => {
        setOwners(response.data);
      })
      .catch((error) => {
        console.error('Error fetching owners:', error);
      });
  }, []);

  return (
    <>
      <Navbar />
      <div className="layout mt-3 h-100">
        <Cover />
      
        <div className="container px-4 py-5">
          <div className="row row-cols-1 row-cols-1 row-cols-lg-3 row-cols-lg-4 g-4 py-4">
            {owners.map((owners) => (
              <div key={owners._id} className="pt-4 ">
                <Cards owners={owners} />
              </div>
            ))}
          </div>
          <hr className="hr" />
          <h1 className=" text-center py-5 my-5">Reviews</h1>
          <div className="">
            <Reviews />
            <Details />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Owners;

