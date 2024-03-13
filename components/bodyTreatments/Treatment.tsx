// card component for massages
import Link from 'next/link';
import {
  FaMoneyBillWave,
  FaHandHolding,
  FaUser,
} from 'react-icons/fa';

type Treatments = {
  treatments: {
  _id: number;
  service: string;
  title: string;
  price: string;
  image: string;
  };
}

const Cards = ({ treatments }: Treatments) => {
  return (
    <>
      <Link className="card-link" href={`/body-treatments/${treatments._id}`}>
        <div className="card">          
          <img 
            src={treatments.image}
            className=" img-fluid" 
            alt="massages" 
            />       
            <div className="carousel-caption pb-5 mt-5">
              <h6 className='text-white'>
                <FaHandHolding className="social-icon mt-n1 me-2 mt-1" />{' '}
                {treatments.service}
              </h6>
              <h6 className='text-white'>
                <FaUser className="social-icon mt-n1 me-2 mt-1" />{' '}
                {treatments.title}
              </h6>
              <h6 className='text-white'>
              <FaMoneyBillWave className="social-icon mt-n1 me-2 mt-1" />
              {treatments.price}
              </h6>
            </div>
          </div>
      </Link>
    </>
  );
};

export default Cards;