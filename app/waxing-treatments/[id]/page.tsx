// waxing [id] page
'use client';
import { useState, useEffect } from 'react';
import axios from 'axios';
// component imports
import Navbar from '@/components/navbar/Navbar';
import Nav from '@/components/waxing-treatments/Nav';
import Bio from '@/components/waxing-treatments/Bio';
import Bookings from '@/components/waxing-treatments/tours/Bookings';
import Iconbar from '@/components/waxing-treatments/Iconbar';
import Footer from '@/components/misc/Footer';



export default function Page({ params }: { params: { id: string } }) {
  const [waxing, setWaxing] = useState<any>(null);

  useEffect(() => {
    axios.get(`https://ivy-server-1f33e818883d.herokuapp.com/waxing-treatments/${params.id}`)
      .then((response) => {
        setWaxing(response.data);
      })
      .catch((error) => {
        console.error('Error fetching waxing-treatment data:', error);
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
                  {waxing && waxing.name}
                </h1>
                <Bio waxings={waxing} />
                <Iconbar waxings={waxing} />
              </div>
              <div className="col-md-4">
                <div className="d-flex justify-content-end mt-5">
                  <p className=" lh-3 fs-5 m-1">{waxing && waxing.description}</p>
                </div>
                <div className="mt-4">
                  <Bookings waxings={waxing} />
                </div>
              </div>
            </div>
          </div>          
        </div>    
      <Footer />
    </>
  );
}
