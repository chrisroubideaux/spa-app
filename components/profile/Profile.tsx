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

function Profile ({ user }: User ) {
  return (
    <Link className="card-link" href={`/profile/${user._id}`}>  
     <div className="media" style={{ maxWidth: '540px' }}>
      <img src={user.image} alt="profile" className="profile" />
      <div className="container py-2">
        <h5 className=" mb-2 fs-sm fw-bold">Profile</h5>
        <h6 className=" fw-bold">{user.fullName}</h6>
        <h6 className=" mb-2 fs-sm fw-bold">
          <FaMobile className="card-icon mt-n1 me-2 mt-1" />
          {user.phone}
        </h6>
        <h6 className=" mb-2 fs-sm fw-bold">
          <FaEnvelope className="card-icon mt-n1 me-2 mt-1" />
          {user.email}
        </h6>
        {/* Add any additional fields from the user model here */}
      </div>
    </div>
    </Link>
  );
}

export default Profile;
