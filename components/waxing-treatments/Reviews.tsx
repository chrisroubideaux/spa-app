// reviews component

import { FaEnvelope, FaFacebookF, FaInstagram, FaTiktok } from 'react-icons/fa';
export default function Reviews() {
  return (
    <>
      <div className="container-fluid">
        <div className="row align-items-end">
          <div className="col">
            <div className=" mx-5 ">
              <img
                src=""
                className="avatar rounded-circle mt-2 mx-3 my-3 border-0"
                alt="..."
              />
            </div>
            <div className=" mx-4">
              <div className="card-footer mx-4 text-nowrap">
                <h6 className="mb-2 fs-xs fw-bold  mx-4">Robin Edwards</h6>
                <h6 className="mb-2 fs-xs text-uppercase mx-4">
                  Sports massage
                </h6>
                <span className="d-inline-block ">
                  <p className="mb-1 fs-6 mx-4 ">Absolutle game-changer!</p>
                </span>
                <span className="d-inline-block "></span>
              </div>
            </div>
          </div>
          <div className="col">
            <div className=" mx-5 ">
              <img
                src=""
                className="avatar rounded-circle mt-2 mx-3 my-3 border-0"
                alt="..."
              />
            </div>
            <div className=" mx-4">
              <div className="card-footer mx-4 text-nowrap">
                <h6 className="mb-2 fs-xs fw-bold  mx-4">Matt Reed</h6>
                <h6 className="mb-2 fs-xs text-uppercase mx-4">Massage</h6>
                <span className="d-inline-block ">
                  <p className="mb-1 fs-6 mx-4">Simply the best!</p>
                </span>
                <span className="d-inline-block "></span>
              </div>
            </div>
          </div>
          <div className="col">
            <div className=" mx-5 ">
              <img
                src=""
                className="avatar rounded-circle mt-2 mx-3 my-3 border-0"
                alt="..."
              />
            </div>
            <div className=" mx-4">
              <div className="card-footer mx-4 text-nowrap">
                <h6 className="mb-2 fs-xs fw-normal mx-4">Tiffany Luck</h6>
                <h6 className="mb-2 fs-xs text-uppercase mx-4"> waxing</h6>
                <span className="d-inline-block ">
                  <p className=" mb-1 fs-sm fw-normal mx-4 ">Friendly staff</p>
                </span>
                <span className="d-inline-block "></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
