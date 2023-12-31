// icon bar for facial components\\
import { FaMobile, FaEnvelope, FaBriefcase } from 'react-icons/fa';

type Facials = {
  facials: {
    _id: number;  
    photo: string;
    name: string;
    phone: string;
    email: string;
    experience: string;
  } 
};

export default function Iconbar({ facials }: Facials) {
 
  return (
    <>
    { facials && (
      <ul className="nav list-inline hstack gap-4 flex-wrap mt-4">
        <li className="nav-item">
          <h6 className="mb-2 fs-6 fw-normal">
            <FaMobile className="social-icon mt-n1 me-1" />
            {facials.phone}
          </h6>
        </li>
        <li className="nav-item">
          <h6 className="mb-2 fs-6 fw-normal">
            <FaEnvelope className="social-icon mt-n1 me-1" />
            {facials.email}
          </h6>
        </li>
        <li className="nav-item">
          <h6 className="fs-6 fw-normal">
            <FaBriefcase className="social-icon  mt-n1 me-1" />
           {facials.experience}
          </h6>
        </li>
      </ul>
      )}
    </>
  );
}
