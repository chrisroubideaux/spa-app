// profile
import Link from 'next/link';
import { FaBriefcase, FaEnvelope, FaMobile } from 'react-icons/fa';


type User = {
  user: {
  _id: number;
  fullName: string;
  phone: string;
  email: string;
  image: string;

  };
};

function ProfileButton ({ user}: User ) {
  return (
    <Link className="btn btn-sm" href={`/profile/${user._id}`}>  
        go to profile
    </Link>
  );
}

export default ProfileButton;
