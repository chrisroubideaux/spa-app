// avatar component for facials page
import Link from 'next/link';
import { FaEnvelope, FaFacebookF, FaInstagram, FaTiktok } from 'react-icons/fa';

type Facials = {
  facials: {
  _id: number;
  title: string;
  name: string;
  email: string;
  photo: string;
 };
}
  
const Cards = ({ facials }: Facials) => {
  return (
    <>
      <Link className="nav-link" href={`/facials/${facials._id}`}>
      <div
        className="d-flex gap-2 justify-content-between m-5"
        style={{ maxWidth: '540px' }}
        >
          <div className="row g-0">
            <div className="col-sm-4">
              <img
                src={facials.photo}
                className="avatar rounded-circle m-auto mt-2 mx-3 my-3 border-0"
                alt="..."
              />
            </div>
            <div className="m-auto">
              <div className="card-body m-4">
                <h6 className="mb-2 fw-normal">
                  {facials.name}
                </h6>
                <h6 className="">
                  {facials.title}
                </h6>  
                <span className="d-flex d-inline-block">   
                </span>          
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}

export default Cards;