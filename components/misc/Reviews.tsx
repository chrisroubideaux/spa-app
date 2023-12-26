// reviews component

// import { FaEnvelope, FaFacebookF, FaInstagram, FaTiktok } from 'react-icons/fa';

export default function Reviews() {
  return (
    <>
      <div className="container-fluid h-100">
        <div className="row align-items-end">
          <div className="col">            
            <div className=" mx-4">
              <div className="card-footer mx-4 text-nowrap">
                <h5 className="mb-2 fs-xs fw-bold  mx-4">Robin Edwards</h5>
                <h6 className="mb-2 fs-xs text-normal mx-4">
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
            <div className=" mx-4">
              <div className="card-footer mx-4 text-nowrap">
                <h5 className="mb-2 fs-xs fw-bold  mx-4">Matt Reed</h5>
                <h6 className="mb-2 fs-xs text-normal mx-4">Massage</h6>
                <span className="d-inline-block ">
                  <p className="mb-1 fs-6 mx-4">Simply the best!</p>
                </span>
                <span className="d-inline-block "></span>
              </div>
            </div>
          </div>
          <div className="col">
            <div className=" mx-4">
              <div className="card-footer mx-4 text-nowrap">
                <h5 className="mb-2 fs-xs fw-bold mx-4">Tiffany Luck</h5>
                <h6 className="mb-2 fs-xs text-normal mx-4">waxing</h6>
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
