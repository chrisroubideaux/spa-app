// icon bar for facial components

import { FaBriefcase, FaEnvelope, FaMobile } from 'react-icons/fa';

type Waxings = {
  waxings: {
   _id: number;
   phone: string;
   email: string;
   experience: string;
  };
}

export default function Iconbar ({ waxings }: Waxings )  {
  return (
    <>
    {waxings && (
    <ul className="nav list-inline hstack gap-4 flex-wrap  mt-4">
      <li className="nav-item">
        <h6 className=" mb-2 fs-6 fw-normal">
          <FaMobile className="card-icon mt-n1 me-2" />
          {waxings.phone}
        </h6>
      </li>
      <li className="nav-item">
        <h6 className=" mb-2 fs-6 fw-normal">
          <FaEnvelope className="card-icon mt-n1 me-2" />
          {waxings.email}
        </h6>
      </li>
      <li className="nav-item">
        <h6 className="fs-6 fw-normal">
          <FaBriefcase className="card-icon mt-n1 me-2" />
          Exp:{waxings.experience}
        </h6>
      </li>
    </ul>
    )}
    </>
  );
}