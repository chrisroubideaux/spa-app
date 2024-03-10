// card component for massages

import Link from 'next/link';

type Facials = {
  facials: {
  _id: number;
  service: string;
  title: string;
  price: string;
  price2: string;
  image: string;
  };
}

const Cards = ({ facials }: Facials) => {

  return (
    <>
      <Link className="card-link" href={`/facials/${facials._id}`}  >
        <div className="card">
          <img
           src={facials.image} 
           className="img img-fluid"
            alt="massages"
           /> 
          <div className="carousel-caption pb-5 mt-5">
            <h6 className="text-white">{facials.service}</h6>
            <h6 className="text-white">{facials.title}</h6>
            <h6 className="text-white">{facials.price}</h6>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Cards;