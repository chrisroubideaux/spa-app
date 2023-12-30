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
      <div className="card">
        <Link className="card-link" href={`/facials/${facials._id}`}  >
          <img className="img img-fluid" src={facials.image} alt="massages" /> 
        </Link>
        <div className="card-body">
          <h6 className="">{facials.service}</h6>
          <h6>{facials.title}</h6>
          <h6>{facials.price}</h6>
        </div>
      </div>
    </>
  );
};

export default Cards;