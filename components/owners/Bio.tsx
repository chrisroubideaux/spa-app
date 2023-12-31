// owner bio component
import Image from 'next/image';

type Owners = {
  owners: {
  id: number;
  photo: string;
  } | null;
}

export default function Bio ({ owners }: Owners ) {
  return (
    <div>
      { owners &&(
      <Image
        className="img-fluid image"
        src={owners.photo}
        width={500}
        height={500}
        alt="Test"
      />
      )}
    </div>
  );
}
