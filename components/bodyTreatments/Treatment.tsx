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
      <Link className="card-link" href={`/body-treatments/${treatments._id}`}  >
        <div className="card">
          
          <img 
            src={treatments.image}
            className=" img-fluid" 
            alt="massages" 
            />       
            <div className="carousel-caption pb-5 mt-5">
              <h6 className='text-white'>
                <FaBuilding className="social-icon mt-n1 me-2 mt-1" />{' '}
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