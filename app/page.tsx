// homepage
'use client';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Navbar from '@/components/navbar/Navbar';
import Details from '@/components/misc/Details';
import Cards from '@/components/massages/Cards';
import FacialCard from '@/components/facials/FacialCard';
import WaxCard from '@/components/waxing-treatments/WaxCard';
import Treatment from '@/components/bodyTreatments/Treatment';
import Footer from '@/components/misc/Footer';
import Cover from '@/components/hero/Cover';


// types
type Massages = {
  _id: number;
  service: string;
  title: string;
  price: string;
  price2: string;
  price3: string;
  image: string;
};

type Facials = {
  _id: number;
  service: string;
  title: string;
  price: string;
  price2: string;
  image: string;
};

type Treatments = {
  _id: number;
  service: string;
  title: string;
  price: string;
  image: string;
};


export default function Home() {
  
const [massages, setMassages] = useState<Massages[]>([]); 
const [facials, setFacials] = useState<Facials[]>([]);
const [treatments, setTreatments] = useState<Treatments[]>([]);
const [waxings, setWaxings] = useState<Treatments[]>([]);

// useEffect 
useEffect(() => {
  axios
    .get('https://ivy-server-1f33e818883d.herokuapp.com/massages')
    .then((response) => {
      setMassages(response.data);
    })
    .catch((error) => {
      console.error('Error fetching massages:', error);
    });
}, []);

// useEffect
useEffect(() => {
  axios
    .get(`https://ivy-server-1f33e818883d.herokuapp.com/facials`)
    .then((response) => {
    
      setFacials(response.data);
    })
    .catch((error) => {
      console.error('Error fetching facials:', error);
    });
}, []);

// useEffect
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

// useEffect
useEffect(() => {
  axios
    .get('https://ivy-server-1f33e818883d.herokuapp.com/body-treatments')
    .then((response) => {
     
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
          <Details />
          {/* massages */}
         
          <div className="container px-4 py-5">
            <h1 className=" text-center py-5 my-5">Massages</h1>
            <div className="row row-cols-1 row-cols-1 row-cols-lg-3 row-cols-lg-4 g-4 py-4">
            {massages.map((massages) => (
              <div key={massages._id} className="pt-4 ">
                <Cards massages={massages} />
              </div>
              ))}
            </div>
             {/* facials */}
            <h1 className=" text-center py-5 my-5">Facials</h1>
            <div className="row row-cols-1 row-cols-1 row-cols-lg-3 row-cols-lg-4 g-4 py-4">
            {facials.map((facials) => (
              <div key={facials._id} className="pt-4 ">
                <FacialCard facials={facials} />
              </div>
              ))}
          </div>

          {/* waxing */}
          <h1 className=" text-center py-5 my-5">Waxing Treatments</h1>
          <div className="row row-cols-1 row-cols-1 row-cols-lg-3 row-cols-lg-4 g-4 py-4">
            {waxings.map((waxings) => (
              <div key={waxings._id} className="pt-4 ">
                <WaxCard waxings={waxings} />
              </div>
            ))}

          </div>
          
          </div>


        </div>
          
      
      <Footer />
    </>
  )
}
