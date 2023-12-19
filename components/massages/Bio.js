// bio component

import Image from 'next/image';

export default function Bio() {
  return (
    <div>
      <Image
        className="img-fluid image"
        src="/../images/misc/misc1.png"
        width={500}
        height={400}
        alt="Test"
      />
    </div>
  );
}
