// detail page for massage page
'use client';
import Navbar from '@/components/navbar/Navbar';
import Nav from '@/components/massages/Nav';
import Footer from '@/components/misc/Footer';

import massages from '@/data/massages';



export default function page({ params }: { params: { id: string } }) {
  const massage = massages.find((massage) => massage.id === Number(params.id));

  return (
    <>
      <Navbar />
      <div className="layout h-100">
        <div className="container my-5">
          <div className="container-fluid">
            <Nav />
          </div>
          <div className="mt-3">
            <div className="container">
              <h1 className="fw-bold">
              {massage && massage.name}
              </h1>
            </div>
         
            <div className="row gx-2">
              <div className="col-md-8">

              {massage && massage.name}

              </div>
              <div className="col-md-4">
                <div className="d-flex justify-content-end">
                  <p className="text-white lh-3 fs-5 m-1">test</p>
                </div>
              </div>
            </div>
            <div className="container mt-5 py-4 my-4">
              <hr className="hr w-25 mx-auto pt-5" />
              <div className="row">
                <div className="col-md-6">
                  <div className="container">
                    <h3 className="fw-bold me-5 text-center">Amenities</h3>
                  </div>
                  <div className=" ">test</div>
                </div>
                <div className="col-md-6">
                  <h3 className="fw-bold text-center">Locations</h3>
                  test
                  <div className="container d-flex justify-content-end fs-6 m-4"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row py-4">
              <div className="col-md-6">
                <h4 className=" text-center fw-normal text-white">
                  Personal Trainer:
                </h4>
                test
              </div>
              <div className="col-md-6">
                <h2 className="text-center fw-bold">About</h2>
                <div className="d-flex justify-content-end">
                  <p className="text-white lh-2 fs-5 m-1">test</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
