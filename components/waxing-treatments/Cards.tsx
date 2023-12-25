// card component for massages
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
  id: number;
  service: string;
  title: string;
  price: string;
  price2: string;
  price3: string;
  image: string;
  };
}

const Cards = ({ waxings }: Waxings) => {
  return (
    <>
      <div className="card">
        <Link className="card-link" href={`/waxing-treatments/${waxings.id}`}  >
          <img className=" img-fluid" src={waxings.image} alt="massages" /> 
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