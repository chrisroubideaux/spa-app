// contact form component
// contact form component
import Image from 'next/image';
import {
  FaBriefcase,
  FaEnvelope,
  FaPhone,
  FaMap,
  FaFacebook,
  FaInstagram,
  FaTiktok,
  FaTty,
} from 'react-icons/fa';
import Nav from './Nav';

export default function Form({}) {
  return (
    <>
      <div className="">
        <section className="my-lg-9">
          <Nav />
          <div className="container">
            <div className="row">
              <div className="col-lg-10 offset-lg-1 col-md-12">
                <div className="row g-lg-10 gy-5 align-items-center">
                  <div className="col-md-6">
                    <div className="cards ">
                      <div className="card-body p-3">
                        {/* map */}
                        <div className='"mt-1'>
                          <h1 className="text-center">Map</h1>
                        </div>
                        {/* end map */}
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="cards">
                      <div className="mb-7 text-center text-lg-start">
                        <div className="mb-3">
                          <div>
                            <Image
                              src="/images/avatars/avatar-1.jpg"
                              width={120}
                              height={120}
                              className="avatar mx-3 my-3"
                              alt="..."
                            />
                          </div>
                        </div>
                      </div>
                      <div className="d-flex m-2">
                        <div className="m-1">
                          <i className="social-icons fa-solid fa-user"></i>
                        </div>
                        <h6 className="mb-0 fw-normal fs-5 m-2">
                          Club Ivy realaxtion & spa
                        </h6>
                      </div>
                      <div className="d-flex m-2 ">
                        <div className="m-1">
                          <FaBriefcase className="social-icon" />
                        </div>
                        <h6 className="mb-0 fs-5 m-2">hours:</h6>
                        <small className="m-2 fs-6">mon-fri 9-7, sat 9-6</small>
                      </div>

                      <div className="d-flex m-2 ">
                        <div className="m-1">
                          <FaPhone className="social-icon" />
                        </div>
                        <h6 className="mb-0 fs-5 m-2">phone:</h6>
                        <small className="m-2 fs-6">555-555-5555</small>
                      </div>

                      <div className="d-flex m-2 ">
                        <div className="m-1">
                          <FaEnvelope className="social-icon" />
                        </div>
                        <h6 className="mb-0 fs-5 m-2">email:</h6>
                        <small className="m-2 fs-6">clubivy@gmail.com</small>
                      </div>

                      <div className="d-flex m-2">
                        <div className="m-1">
                          <FaMap className="social-icon" />
                        </div>

                        <h6 className="mb-0 fs-5 m-2">location:</h6>
                        <small className="m-2 fs-6">Mid-west, USA</small>
                      </div>

                      <div className="d-flex mt-3 m-3">
                        <a href="/" className="">
                          <FaFacebook
                            className="social-icons"
                            width="24"
                            height="25"
                          />
                        </a>

                        <a href="/" className="">
                          <FaInstagram
                            className="social-icons me-2"
                            width="24"
                            height="25"
                          />
                        </a>
                        <a href="#!" className="">
                          <FaTiktok
                            className="social-icons"
                            width="24"
                            height="25"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}