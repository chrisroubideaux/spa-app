// bio component
import Image from 'next/image';

type Treatments = {
  treatments: {
  id: number;
  photo: string;
  } | null;
}
export default function Bio ({ treatments }: Treatments ) {
  return (
    <div>
      {treatments && (
      <Image
        className="img-fluid image"
        src={treatments.photo}
        width={500}
        height={500}
        alt="Test"
      />
      )}
    </div>
  );
}
