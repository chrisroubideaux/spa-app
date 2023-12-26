import Link from 'next/link';
//import { FaEnvelope, FaFacebookF, FaInstagram, FaTiktok } from 'react-icons/fa';

type Guides = {
  guides: {
  id: number;
  title: string;
  name: string;
  email: string;
  photo: string;
 };
}
  
const Cards = ({ guides }: Guides) => {
  return (
    <>
      <Link className="nav-link" href={`/guides/${guides.id}`}>
      <div
        className="d-flex gap-2 justify-content-between m-5"
        style={{ maxWidth: '540px' }}
        >
        <div className="row g-0">
          <div className="col-sm-4">
            <img
              src={guides.photo}
              className="avatar rounded-circle m-auto mt-2 mx-3 my-3 border-0"
              alt="..."
            />
          </div>
            <div className="m-auto">
              <div className="card-body m-4">
                <h6 className="mb-2 fw-normal">
                  {guides.name}
                </h6>
                <h6 className="">
                  {guides.title}
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