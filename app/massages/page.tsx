// massages page
'use client';
import { useState, useEffect } from 'react';
import Navbar from '@/components/navbar/Navbar';
import Cover from '@/components/massages/Cover';
import Banner from '@/components/massages/Banner';
import Cards from '@/components/massages/Cards';
import Reviews from '@/components/misc/Reviews';
import Details from '@/components/misc/Details';
import Footer from '@/components/misc/Footer';

//import massages from '@/data/massages';
import axios from 'axios';

type Massages = {
  _id: number;
  service: string;
  title: string;
  price: string;
  price2: string;
  price3: string;
  image: string;
};


const Massages = () => {
  const [massages, setMassages] = useState<Massages[]>([]);
  
  useEffect(() => {
    // Make a GET request to fetch massage data from server
    axios
      .get('http://localhost:3001/massages')
      .then((response) => {
        // Update the state with the fetched massages
        setMassages(response.data);
      })
      .catch((error) => {
        console.error('Error fetching massages:', error);
      });
  }, []);
  return (
    <>
      <Navbar />
      <div className="layout mt-3 h-100">
        <Cover />
        <Banner />
        <div className="container px-4 py-5">
          <div className="row row-cols-1 row-cols-1 row-cols-lg-3 row-cols-lg-4 g-4 py-4">
            {massages.map((massages) => (
              <div key={massages._id} className="pt-4 ">
                <Cards massages={massages} />
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
}

export default Massages;
