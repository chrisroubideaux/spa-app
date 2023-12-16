import { FaHandshake, FaBoxTissue } from 'react-icons/fa';

export default function Details() {
  return (
    <>
      <div className="container px-5 py-5 my-5">
        <h1 className="">What we offer!</h1>
        <hr className="hr" />
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-5">
          <div className="col d-flex align-items-start">
            <FaBoxTissue width="1.75em" height="1.75em" className="social-icons m-2" />

            <div>
              <h4 className="fw-bold mb-0 fs-4"> Relaxation</h4>
              <p className="">
              At Club Ivy, we center our services around your well-being, specializing in spa and skincare treatments with ourtailored approach.
              </p>
            </div>
          </div>
          <div className="col d-flex ">
            <FaHandshake width="1.75em" height="1.75em" className="social-icons m-2" />

            <div>
              <h4 className="fw-bold mb-0 fs-4">Flexibility</h4>
              <p className="">
                Membership options are flexible to suit your everyday life, Upgrade your plan hassle-free at any time.
              </p>
            </div>
          </div>
          <div className="col d-flex align-items-start">
            <FaHandshake width="1.75em" height="1.75em" className="social-icons m-2" />
            <div>
              <h4 className="fw-bold mb-0 fs-4">Meet our staff</h4>
              <p className="">
                Meet our dedicated staff and take a complimentary tour of our cutting-edge facility. See why Club Ivy is voted # 1.
              </p>
            </div>
          </div>
          <div className="col d-flex align-items-start">
            <FaHandshake width="1.75em" height="1.75em" className="social-icons m-2" />
            <div>
              <h4 className="fw-bold mb-0 fs-4">Community</h4>
              <p className="">
                Stay informed about the latest events and community initiatives. We believe in the power of community.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
