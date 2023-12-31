// iconbar for massages
import { FaBriefcase, FaEnvelope, FaMobile } from 'react-icons/fa';

type Massages = {
  massages: {
  _id: number;
  phone: string;
  email: string;
  experience: string;
  };
}

export default function Iconbar ({massages}: Massages )  {
  return (
  <> 
   { massages && (
    <ul className="nav list-inline hstack gap-4 flex-wrap  mt-4">
      <li className="nav-item">
        <h6 className=" mb-2 fs-6 fw-normal">
          <FaMobile className="social-icon mt-n1 me-1" />
          {massages.phone}
        </h6>
      </li>
      <li className="nav-item">
        <h6 className=" mb-2 fs-6 fw-normal">
          <FaEnvelope className="social-icon mt-n1 me-1" />
          {massages.email}
        </h6>
      </li>
      <li className="nav-item">
        <h6 className="fs-6 fw-normal">
          <FaBriefcase className="social-icon mt-n1 me-1" />
          {massages.experience}
        </h6>
      </li>
    </ul>
    )}
  </>
  );
}



{/*

import { FaBriefcase, FaEnvelope, FaMobile } from 'react-icons/fa';


type Massages = {
  massages: {
  id: number;
  phone: string;
  email: string;
  experience: string;
  };
}


export default function Iconbar ({massages}: {massages: any})  {
  return (
    <ul className="nav list-inline hstack gap-4 flex-wrap  mt-4">
      <li className="nav-item">
        <h6 className=" mb-2 fs-sm fw-bold">
          <FaMobile className="card-icon mt-n1 me-2" />
          {massages.phone}
        </h6>
      </li>
      <li className="nav-item">
        <h6 className=" mb-2 fs-sm fw-bold">
          <FaEnvelope className="card-icon mt-n1 me-2" />
          {massages.email}
        </h6>
      </li>
      <li className="nav-item">
        <h6 className="fs-sm fw-bold">
          <FaBriefcase className="card-icon mt-n1 me-2" />
          Exp:{massages.experience}
        </h6>
      </li>
    </ul>
  );
}

*/}



