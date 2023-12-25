// waxing [id] page
// body treatment [id] page

'use client';
import Navbar from '@/components/navbar/Navbar';
import Nav from '@/components/waxing-treatments/Nav';
import Bio from '@/components/waxing-treatments/Bio';
import Bookings from '@/components/waxing-treatments/tours/Bookings';
import Iconbar from '@/components/waxing-treatments/Iconbar';
import Footer from '@/components/misc/Footer';
// data

import waxings from '@/data/waxings';


export default function Page({ params }: { params: { id: string } }) {
  const waxing = waxings.find((waxing) => waxing.id === Number(params.id));

  if (!waxing) {
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
                  {waxing && waxing.name}
                </h1>
                <Bio waxings={waxing} />
                <Iconbar waxings={waxing} />
              </div>
              <div className="col-md-4">
                <div className="d-flex justify-content-end mt-5">
                  <p className=" lh-3 fs-5 m-1">{waxing && waxing.description}</p>
                </div>
                <Bookings waxings={waxing} />
              </div>
            </div>
          </div>          
        </div>    
      <Footer />
    </>
  );
}
