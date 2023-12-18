// iconbar component
import { FaCalendar, FaHourglass, FaThumbsUp, FaUser } from 'react-icons/fa';

function Iconbar() {
  return (
    <div className="container mt-5 pt-5">
      <ul className="nav list-inline hstack gap-4 flex-wrap justify-content-center ">
        <li className="nav-item ms-2">
          <h6 className="mb-2 fs-sm fw-normal fs-6">
            <FaThumbsUp className="social-icons me-2 fs-5" />
            Ranked #1
          </h6>
        </li>
        <li className="nav-item ms-2 ">
          <h6 className=" fw-normal mb-2 fs-6">
            <FaHourglass className="social-icons me-2 fs-5" />
            Flexiablity
          </h6>
        </li>

        <li className="nav-item ms-2">
          <h6 className=" fw-normal mb-2 fs-6">
            <FaUser className="social-icons me-2 fs-5" />
            Deticated Staff
          </h6>
        </li>

        <li className="nav-item ms-2">
          <h6 className=" fw-normal fs-6">
            <FaCalendar className="social-icons me-2 fs-6" />
            Book Now
          </h6>
        </li>
      </ul>
    </div>
  );
}

export default Iconbar;
