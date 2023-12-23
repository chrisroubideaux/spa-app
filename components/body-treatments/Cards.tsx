// card component for massages

import Link from 'next/link';
import {
  FaBuilding,
  FaMoneyBillWave,
  FaMapPin,
  FaBed,
  FaBath,
} from 'react-icons/fa';

type Treatments = {
  treatments: {
  id: number;
  service: string;
  title: string;
  price: string;
  price2: string;
  price3: string;
  image: string;
  };
}

const Cards = ({ treatments }: Treatments) => {
  return (
    <>
      <div className="card">
        <Link className="card-link" href={`/body-treatments/${treatments.id}`}  >
          <img className=" img-fluid" src={treatments.image} alt="massages" /> 
        </Link>
        <div className="card-body">
         
          <h6>
          <FaBuilding className="social-icon mt-n1 me-2 mt-1" />{' '}
            {treatments.title}</h6>
          <h6>
          <FaMoneyBillWave className="social-icon mt-n1 me-2 mt-1" />
          {treatments.price}
          </h6>
        </div>
      </div>
    </>
  );
};

export default Cards;