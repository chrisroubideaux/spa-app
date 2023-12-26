// owner avatar component
import Link from 'next/link';
//import { FaEnvelope, FaFacebookF, FaInstagram, FaTiktok } from 'react-icons/fa';

type Owners = {
  owners: {
  id: number;
  title: string;
  name: string;
  email: string;
  photo: string;
 };
}
  
const Cards = ({ owners }: Owners) => {
  return (
    <>
      <Link className="nav-link" href={`/owners/${owners.id}`}>
      <div
        className=" gap-2 "
        style={{ maxWidth: '540px' }}
        >
        <div className="row g-0">
          <div className="col-sm-4">
            <img
              src={owners.photo}
              className="avatar rounded-circle m-auto mt-2 mx-3 my-3 border-0"
              alt="..."
            />
          </div>
            <div className="">
              <div className="card-body m-3">
                <h6 className="mb-2 fw-normal">
                  {owners.title}
                </h6>
                <h6 className="">
                  {owners.name}
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