// bio component

import Image from 'next/image';

type Massages = {
  massages: {
  id: number;
  photo: string;
  };
}
export default function Bio ({massages}: Massages ) {
  return (
    <div>
      <Image
        className="img-fluid image"
        src={massages.photo}
        width={500}
        height={500}
        alt="Test"
      />
    </div>
  );
}
