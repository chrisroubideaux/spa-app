//  [id] detail page
'use client';
import axios from 'axios';
import { useState, useEffect } from 'react';
// component imports
import Navbar from '@/components/navbar/Navbar';
import Nav from '@/components/facials/Nav';
import Bio from '@/components/owners/Bio';
import Iconbar from '@/components/owners/Iconbar';
import Footer from '@/components/misc/Footer';

export default function Page ({ params }: { params: { id: number; } }) {  
  
  const [owner, setOwner] = useState<any>(null);
useEffect(() => {
  axios.get(`http://localhost:3001/owners/${params.id}`)
    .then((response) => {
      setOwner(response.data);
    })
    .catch((error) => {
      console.error('Error fetching owner data:', error);
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
                {owner && owner.name}
                </h1>
                <Bio owners={owner} />
                 <Iconbar owners={owner} /> 
              </div>
              <div className="col-md-4">
                <h4 className="mt-3 fw-normal">{owner && owner.title}</h4>
                <div className="d-flex justify-content-end mt-5">
                  <p className=" lh-3 fs-5 m-1">{owner && owner.description}</p>
                </div>
                <div className="mt-4">
                  
                </div>
              </div>
            </div>
          </div>          
        </div>    
      <Footer />
    </>
  );
}