// bio component
import Image from 'next/image';

type Facials = {
  facials: {
  id: number;
  photo: string;
  };
}
export default function Bio ({facials}: Facials ) {
  return (
    <div>
      <Image
        className="img-fluid image"
        src={facials.photo}
        width={500}
        height={500}
        alt="Test"
      />
    </div>
  );
}
