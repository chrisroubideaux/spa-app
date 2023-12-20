// icon bar for facial components

import { FaBriefcase, FaEnvelope, FaMobile } from 'react-icons/fa';

type Facials = {
  facials: {
  id: number;
  phone: string;
  email: string;
  experience: string;
  };
}

export default function Iconbar ({facials}: Facials )  {
  return (
    <ul className="nav list-inline hstack gap-4 flex-wrap  mt-4">
      <li className="nav-item">
        <h6 className=" mb-2 fs-6 fw-normal">
          <FaMobile className="card-icon mt-n1 me-2" />
          {facials.phone}
        </h6>
      </li>
      <li className="nav-item">
        <h6 className=" mb-2 fs-6 fw-normal">
          <FaEnvelope className="card-icon mt-n1 me-2" />
          {facials.email}
        </h6>
      </li>
      <li className="nav-item">
        <h6 className="fs-6 fw-normal">
          <FaBriefcase className="card-icon mt-n1 me-2" />
          Exp:{facials.experience}
        </h6>
      </li>
    </ul>
  );
}