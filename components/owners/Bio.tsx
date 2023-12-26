// owner bio component
import Image from 'next/image';

type Owners = {
  owners: {
  id: number;
  photo: string;
  };
}

export default function Bio ({ owners }: Owners ) {
  return (
    <div>
      <Image
        className="img-fluid image"
        src={owners.photo}
        width={500}
        height={500}
        alt="Test"
      />
    </div>
  );
}
