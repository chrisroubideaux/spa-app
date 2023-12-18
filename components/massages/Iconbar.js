// iconbar component
import { FaBriefcase, FaEnvelope, FaMobile } from 'react-icons/fa';
export default function Iconbar({ massages }) {
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
