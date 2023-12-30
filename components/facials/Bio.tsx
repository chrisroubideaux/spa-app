// bio component
import Image from 'next/image';

type Facials = {
  facials: {
  id: number;
  photo: string;
  name: string;

  } | null
}
export default function Bio ({facials}: Facials ) {
  return (
    <div>
     {facials && (
      <Image
        className="img-fluid image"
        src={facials.photo}
        width={500}
        height={500}
        alt="Test"
      />
      )}
    
    </div>
  );
}
