// card component for massages

import Link from 'next/link';

type Massages = {
  massages: {
  id: number;
  service: string;
  title: string;
  price: string;
  price2: string;
  price3: string;
  image: string;
  };
}

const Cards = ({ massages }: Massages) => {

  return (
    <>
      <div className="card">
        <Link className="card-link" href={`/massages/${massages.id}`}  >
          <img className="img img-fluid" src={massages.image} alt="massages" /> 
        </Link>
        <div className="card-body">
          <h6 className="">{massages.service}</h6>
          <h6>{massages.title}</h6>
          <h6>{massages.price}</h6>
        </div>
      </div>
    </>
  );
};

export default Cards;
