// waxing services page
'use client';
import { useState, useEffect } from 'react';
import axios from 'axios';
// component imports
import Navbar from '@/components/navbar/Navbar';
import Cover from '@/components/waxing-treatments/Cover';
import Banner from '@/components/waxing-treatments/Banner';
import Cards from '@/components/waxing-treatments/Cards';
import Reviews from '@/components/misc/Reviews';
import Details from '@/components/misc/Details';
import Footer from '@/components/misc/Footer';

type Waxings = {
  _id: number;
  service: string;
  title: string;
  price: string;
  image: string;
};


const Waxings = () => {
  const [waxings, setWaxings] = useState<Waxings[]>([]);

  useEffect(() => {
    axios
      .get('https://ivy-server-1f33e818883d.herokuapp.com/waxing-treatments')
      .then((response) => {
        setWaxings(response.data);
      })
      .catch((error) => {
        console.error('Error fetching body-treatments:', error);
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
            {waxings.map((waxings) => (
              <div key={waxings._id} className="pt-4 ">
                <Cards waxings={waxings} />
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

export default Waxings;
