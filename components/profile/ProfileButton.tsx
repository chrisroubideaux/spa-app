// profile
import Link from 'next/link';
import { FaBriefcase, FaEnvelope, FaMobile } from 'react-icons/fa';


type Users = {
  users: {
  _id: number;
  fullName: string;
  phone: string;
  email: string;
  image: string;

  };
};

function ProfileButton ({ users }: Users ) {
  return (
    <Link className="card-link" href={`/profile/${users._id}`}>  
     <div className="media" style={{ maxWidth: '540px' }}>
      <img src={users.image} alt="profile" className="profile" />
      <div className="container py-2">
        <h5 className=" mb-2 fs-sm fw-bold">Profile</h5>
        <h6 className=" fw-bold">{users.fullName}</h6>
        <h6 className=" mb-2 fs-sm fw-bold">
          <FaMobile className="card-icon mt-n1 me-2 mt-1" />
          {users.phone}
        </h6>
        <h6 className=" mb-2 fs-sm fw-bold">
          <FaEnvelope className="card-icon mt-n1 me-2 mt-1" />
          {users.email}
        </h6>
        {/* Add any additional fields from the user model here */}
      </div>
    </div>
    </Link>
  );
}

export default ProfileButton;
