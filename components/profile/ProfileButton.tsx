// profile
import Link from 'next/link';
import { FaBriefcase, FaEnvelope, FaMobile } from 'react-icons/fa';


function ProfileButton ({  } ) {
  return (
    <Link className="btn btn-sm" href='/'>  
        go to profile
    </Link>
  );
}

export default ProfileButton;
