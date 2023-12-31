// iconbar component

import { FaBriefcase, FaEnvelope, FaMobile } from 'react-icons/fa';

type Owners = {
  owners: {
  _id: number;
  phone: string;
  email: string;
  experience: string;
  };
}

export default function Iconbar ({ owners }: Owners )  {
  return (   
    <>
    { owners && (
    <ul className="nav list-inline hstack gap-4 flex-wrap  mt-4">
      <li className="nav-item">
        <h6 className=" mb-2 fs-6 fw-normal">
          <FaMobile className="card-icon mt-n1 me-2" />
          {owners.phone}
        </h6>
      </li>
      <li className="nav-item">
        <h6 className=" mb-2 fs-6 fw-normal">
          <FaEnvelope className="card-icon mt-n1 me-2" />
          {owners.email}
        </h6>
      </li>
      <li className="nav-item">
        <h6 className="fs-6 fw-normal">
          <FaBriefcase className="card-icon mt-n1 me-2" />
          {owners.experience}
        </h6>
      </li>
    </ul>
    )}  
    </>
  );
}