// body treatment [id] page

'use client';
import Navbar from '@/components/navbar/Navbar';
import Nav from '@/components/body-treatments/Nav';
import Bio from '@/components/body-treatments/Bio';
import Bookings from '@/components/body-treatments/tours/Bookings';
import Iconbar from '@/components/body-treatments/Iconbar';
import Footer from '@/components/misc/Footer';
// data

import treatments from '@/data/treatments';


export default function Page({ params }: { params: { id: string } }) {
  const treatment = treatments.find((treatment) => treatment.id === Number(params.id));

  if (!treatment) {
    // return message not found
    return <div>Page not found</div>;
  }

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
                  {treatment && treatment.name}
                </h1>
                <Bio treatments={treatment} />
                <Iconbar treatments={treatment} />
              </div>
              <div className="col-md-4">
                <div className="d-flex justify-content-end mt-5">
                  <p className=" lh-3 fs-5 m-1">{treatment && treatment.description}</p>
                </div>
                <Bookings treatments={treatment} />
              </div>
            </div>
          </div>          
        </div>    
      <Footer />
    </>
  );
}
