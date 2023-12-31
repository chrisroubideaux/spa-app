// card component for wax treatments

import Link from 'next/link';
import {
  FaBuilding,
  FaMoneyBillWave,
  FaMapPin,
  FaBed,
  FaBath,
} from 'react-icons/fa';

type Waxings = {
  waxings: {
  _id: number;
  service: string;
  title: string;
  price: string;
  image: string;
  };
}

const Cards = ({ waxings }: Waxings) => {

  return (
    <>
      <div className="card">
        <Link className="card-link" href={`/waxing-treatments/${waxings._id}`}  >
          <img className=" img-fluid" src={waxings.image} alt="waxings" /> 
        </Link>
        <div className="card-body">
          <h6>
            <FaBuilding className="social-icon mt-n1 me-2 mt-1" />{' '}
            {waxings.title}</h6>
          <h6>
            <FaMoneyBillWave className="social-icon mt-n1 me-2 mt-1" />
            {waxings.price}
          </h6>
        </div>
      </div>
    </>
  );
};

export default Cards;