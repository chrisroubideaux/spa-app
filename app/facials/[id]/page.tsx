//  [id] detail page
'use client';
import { useState, useEffect } from 'react';
import Navbar from '@/components/navbar/Navbar';
import Nav from '@/components/facials/Nav';
import Bio from '@/components/facials/Bio';
import Bookings from '@/components/facials/tours/Bookings';
import Iconbar from '@/components/facials/Iconbar';
import Footer from '@/components/misc/Footer';
//import facials from '@/data/facials';
import axios from 'axios';


export default function Page ({ params }: { params: { id: number; } }) {
 
  
const [facial, setFacial] = useState<{ id: number; name: string; title: string; photo: string; description: string;} | null>(null);


useEffect(() => {
  // Make a GET request to fetch the product data based on the ID
  axios.get(`http://localhost:3001/facials/${params.id}`)
    .then((response) => {
      // Update the state with the fetched product data
      setFacial(response.data);
    })
    .catch((error) => {
      console.error('Error fetching product data:', error);
    });
}, [params.id]);

  return (
    <>
      <Navbar />
      <div className="layout h-100">
        <div className="container my-5">
          <div className="container-fluid">
            <Nav />
          </div>
            <div className="row gx-2">
              <div className="col-md-8">
                <h1 className="fw-normal">
                {facial && facial.name}
                </h1>
                <Bio facials={facial} />
               {/*  <Iconbar facials={facial} /> */}
              </div>
              <div className="col-md-4">
                 <h4 className="mt-3 fw-normal">{facial && facial.title}</h4>

                <div className="d-flex justify-content-end mt-5">
                  <p className=" lh-3 fs-5 m-1">{facial && facial.description}</p>
                </div>
                <div className="mt-4">
                  {/*
                  <Bookings facials={facial} /> 
                  */}
                </div>
              </div>
            </div>
          </div>          
        </div>    
      <Footer />
    </>
  );
}