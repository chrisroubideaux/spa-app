// detail page for massage page
'use client';
import Navbar from '@/components/navbar/Navbar';
import Nav from '@/components/massages/Nav';
import Bio from '@/components/massages/Bio';
import Bookings from '@/components/massages/tours/Bookings';
import Iconbar from '@/components/massages/Iconbar';
import Footer from '@/components/misc/Footer';
import massages from '@/data/massages';


export default function Page({ params }: { params: { id: string } }) {
  const massage = massages.find((massage) => massage.id === Number(params.id));

  if (!massage) {
    // return message not found
    return <div>Massage not found</div>;
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
                  {massage && massage.name}
                </h1>
                <Bio massages={massage} />
                <Iconbar massages={massage} />
              </div>
              <div className="col-md-4">
                <div className="d-flex justify-content-end mt-5">
                  <p className=" lh-3 fs-5 m-1">{massage && massage.description}</p>
                </div>
                <Bookings massages = {massage} />
              </div>
            </div>
          </div>          
        </div>    
      <Footer />
    </>
  );
}
