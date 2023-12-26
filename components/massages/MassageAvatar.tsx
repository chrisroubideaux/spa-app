import Link from 'next/link';
import { FaEnvelope, FaFacebookF, FaInstagram, FaTiktok } from 'react-icons/fa';

type Massages = {
  massages: {
  id: number;
  title: string;
  name: string;
  email: string;
  photo: string;
 };
}
  
const Cards = ({ massages }: Massages) => {
  return (
    <>
      <Link className="nav-link" href={`/massages/${massages.id}`}>
        <div
          className="d-flex gap-2 justify-content-between m-5"
          style={{ maxWidth: '540px' }}
        >
          <div className="row g-0">
            <div className="col-sm-4">
              <img
                src={massages.photo}
                className="avatar rounded-circle m-auto mt-2 mx-3 my-3 border-0"
                alt="..."
              />
            </div>
            <div className="m-auto">
              <div className="card-body m-4">
                <h6 className="mb-2 fw-normal">
                  {massages.name}
                </h6>
                <h6 className="">
                  {massages.title}
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