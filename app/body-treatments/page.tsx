// body page
'use client';
import { useState, useEffect } from 'react'
import Navbar from '@/components/navbar/Navbar';
import Cover from '@/components/bodyTreatments/Cover';
import Banner from '@/components/bodyTreatments/Banner';
import Cards from '@/components/bodyTreatments/Cards';
import Reviews from '@/components/misc/Reviews';
import Details from '@/components/misc/Details';
import Footer from '@/components/misc/Footer';

//import treatments from '@/data/treatments';

import axios from 'axios';

type Treatments = {
  _id: number;
  service: string;
  title: string;
  price: string;
  image: string;
};

const Treatments = () => {
  const [treatments, setTreatments] = useState<Treatments[]>([]);

  useEffect(() => {
    // Make a GET request to fetch body-treatment data from server
    axios
      .get('https://ivy-server-1f33e818883d.herokuapp.com/body-treatments')
      .then((response) => {
        // Update the state with the fetched body-treatments
        setTreatments(response.data);
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
            {treatments.map((treatments) => (
              <div key={treatments._id} className="pt-4 ">
                <Cards treatments={treatments} />
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

export default Treatments;
