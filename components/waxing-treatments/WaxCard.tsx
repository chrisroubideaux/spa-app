// card component for wax treatments

import Link from 'next/link';
import {
  FaFillDrip,
  FaMoneyBillWave,
  FaUser,
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
    <Link className="card-link" href={`/waxing-treatments/${waxings._id}`}  >
      <div className="card">
        <img 
        src={waxings.image} 
        className=" img-fluid"  
        alt="waxings" 
        /> 
      
      <div className="carousel-caption pb-5 mt-5">
        <h6 className='text-white'>
          <FaUser className="social-icon mt-n1 me-2 mt-1" />
          {waxings.service}
        </h6>
        <h6 className='text-white'>
          <FaFillDrip  className="social-icon mt-n1 me-2 mt-1" />{' '}
          {waxings.title}
        </h6>
        <h6 className='text-white'>
          <FaMoneyBillWave className="social-icon mt-n1 me-2 mt-1" />
          {waxings.price}
          </h6>
        </div>
      </div>
    </Link>
    </>
  );
};

export default Cards;