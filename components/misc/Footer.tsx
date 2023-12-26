// footer component
import Link from "next/link";
import { FaFacebook, FaInstagram, FaTiktok, FaYoutube, FaAngleDown, } from 'react-icons/fa';

export default function Footer() {

  return (
    <div className="py-5">
      <footer className=" h-100 py-5">
        <div className="container-fluid mt-7">
          <div className="row">
            <div className="col-xxl-5 col-lg-5 col-md-7">
              <div className="mb-7 mb-xl-0">
                <div className="">
                  <Link href="#">
                 {/* img */}
                  </Link>
                </div>
                <p className="mb-5">
                  Club Ivy: Elevate your relaxation. Discover tranquility and luxury 
                  at its finest with our exclusive spa experience.
                </p>
                <form className="needs-validation">
                  <h5 className="mb-3">Subscribe to our newsletter</h5>
                  <div className="row g-2">
                    <div className="col-lg-9 col-8">
                      <label className="visually-hidden">
                        Email
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="subscribeEmail"
                        placeholder="Email address"
                        required
                      />
                      <div className="invalid-feedback">Please enter email.</div>
                    </div>
                    <div className="col-lg-3 col-4">
                      <div>
                        <button type="submit" className="btn btn-md">
                          Subscribe
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="offset-xxl-1 col-xxl-6 col-lg-6 offset-md-1 col-md-4">
              <div className="row" id="ft-links">
                <div className="col-lg-4 col-12">
                  <div className="position-relative">
                    <div className="mb-3 pb-2 d-flex justify-content-between border-bottom border-bottom-lg-0">
                      <h5>Services</h5>
                      <Link
                        className="d-block d-lg-none stretched-link text-inherit"
                        data-bs-toggle="collapse"
                        href="#collapseLanding"
                        role="button"
                        aria-expanded="false"
                        aria-controls="collapseLanding"
                      >
                        <FaAngleDown className=" mt-1" />
                      </Link>
                    </div>
                    <div
                      className="collapse d-lg-block"
                      id="collapseLanding"
                      data-bs-parent="#ft-links"
                    >
                      <ul className="list-unstyled mb-0 py-3 py-lg-0">
                        <li className="mb-2">
                          <Link
                            href="/"
                            className="nav-link"
                          >
                            Massages
                          </Link>
                        </li>
                        <li className="mb-2">
                          <Link href="#!" className="nav-link">
                            Facials
                          </Link>
                        </li>
                        <li className="mb-2">
                          <Link
                            href="/"
                            className="nav-link"
                          >
                            Body Treatments
                          </Link>
                        </li>
                        <li className="mb-2">
                          <Link
                            href="/"
                            className="nav-link"
                          >
                            Nails
                          </Link>
                        </li>
                        <li className="mb-2">
                          <Link
                            href="/"
                            className="nav-link"
                          >
                            Waxing
                          </Link>
                        </li>
                        
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-12">
                  <div className="mb-3 pb-2 d-flex justify-content-between border-bottom border-bottom-lg-0 position-relative">
                    <h5>Accounts</h5>
                    <Link
                      className="d-block d-lg-none stretched-link text-inherit"
                      data-bs-toggle="collapse"
                      href="#collapseAccounts"
                      role="button"
                      aria-expanded="false"
                      aria-controls="collapseAccounts"
                    >
                      <FaAngleDown className=" mt-1" />
                    </Link>
                  </div>
                  <div
                    className="collapse d-lg-block"
                    id="collapseAccounts"
                    data-bs-parent="#ft-links"
                  >
                    <ul className="list-unstyled mb-0 py-3 py-lg-0">
                      <li className="mb-2">
                        <Link
                          href="/Register"
                          className="nav-link"
                        >
                          Register
                        </Link>
                      </li>
                      <li className="mb-2">
                        <Link
                          href="/Login"
                          className="nav-link"
                        >
                          Login
                        </Link>
                      </li>
                      <li className="mb-2">
                      <Link
                          href="/Login"
                          className="nav-link"
                        >
                          Forget Password
                        </Link>
                      </li>
                      <li className="mb-2">
                        
                      </li>
                      <li className="mb-2">
                        <Link href="/" className="nav-link">
                          Profile
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-4 col-12">
                  <div className="mb-3 pb-2 d-flex justify-content-between border-bottom border-bottom-lg-0 position-relative">
                    <h5>Resources</h5>
                    <Link
                      className="d-block d-lg-none stretched-link text-inherit"
                      data-bs-toggle="collapse"
                      href="#collapseResources"
                      role="button"
                      aria-expanded="false"
                      aria-controls="collapseResources"
                    >
                      <FaAngleDown className=" mt-1" />
                    </Link>
                  </div>
                  <div
                    className="collapse d-lg-block"
                    id="collapseResources"
                    data-bs-parent="#ft-links"
                  >
                    <ul className="list-unstyled mb-0 py-3 py-lg-0">
                      <li className="mb-2">
                        <Link
                          href="/"
                          className="nav-link"
                        >
                          Docs
                        </Link>
                      </li>
                      <li className="mb-2">
                        <Link href="/" className="nav-link">
                          Support
                        </Link>
                      </li>
                      <li className="mb-2">
                        <Link
                          href="/"
                          className="nav-link"
                        >
                          Changelog
                        </Link>
                      </li>
                      <li className="mb-2">
                        <Link href="/" className="nav-link">
                          Help Center
                        </Link>
                      </li>
                      <li className="mb-2">
                        <Link href="/" className="nav-link">
                          Community
                        </Link>
                      </li>
                      
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container  ">
          <div className="row align-items-center">
            <div className="col-md-9">
             <p>Copyright © 2023 Club Ivy</p>
            </div>
            <div className="col-md-3">
              <div className="d-flex justify-content-md-end">
                <div className="ms-3 d-flex gap-2">
                  <Link href="/" className="">
                    <FaFacebook width="16" height="16" className="social-icons m-2" />
                  </Link>
                  <Link href="/" className="">
                    <FaInstagram width="16" height="16" className="social-icons m-2" />
                  </Link>
                  <Link href="/" className="">
                  <FaTiktok width="16" height="16" className="social-icons m-2" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
