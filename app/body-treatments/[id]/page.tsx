// body treatment [id] page
'use client';
import axios from 'axios';
import { useState, useEffect } from 'react';
// component imports
import Navbar from '@/components/navbar/Navbar';
import Nav from '@/components/bodyTreatments/Nav';
import Bio from '@/components/bodyTreatments/Bio';
import Bookings from '@/components/bodyTreatments/tours/Bookings';
import Iconbar from '@/components/bodyTreatments/Iconbar';
import Footer from '@/components/misc/Footer';

export default function Page({ params }: { params: { id: number } }) {
  
  const [treatment, setTreatment] = useState<any>(null);

  useEffect(() => {
    axios.get(`https://ivy-server-1f33e818883d.herokuapp.com/body-treatments/${params.id}`)
      .then((response) => {
        setTreatment(response.data);
      })
      .catch((error) => {
        console.error('Error fetching body-treatment data:', error);
      });
  }, [params.id]);

  return (
    <>
      <Navbar />
      <div className="layout mt-3 h-100">
        <div className="container my-5">
          <div className="container-fluid">
            <Nav />
          </div>
            <div className="row gx-2">
              <div className="col-md-8">
                <h1 className="fw-normal">
                  {treatment && treatment.name}
                </h1>
                <Bio treatments={treatment} />
                <Iconbar treatments={treatment} />
              </div>
              <div className="col-md-4">
                <div className="d-flex justify-content-end mt-5">
                  <p className=" lh-3 fs-5 m-1">{treatment && treatment.description}</p>
                </div>
                <div className="mt-4">
                  <Bookings treatments={treatment} />
                </div>
              </div>
            </div>
          </div>          
        </div>    
      <Footer />
    </>
  );
}
