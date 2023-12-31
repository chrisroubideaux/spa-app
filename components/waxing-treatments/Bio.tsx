// bio component
import Image from 'next/image';

type Waxings = {
  waxings: {
  id: number;
  photo: string;
  } | null;
};
export default function Bio ({ waxings }: Waxings ) {
  return (
    <div>
      {waxings && (
      <Image
        className="img-fluid image"
        src={waxings.photo}
        width={500}
        height={500}
        alt="Test"
      />
      )}
    </div>
  );
}
