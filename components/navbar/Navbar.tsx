// navbar component
import Link from 'next/link';
import { FaAngleDown, FaBars } from 'react-icons/fa';
export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg w-100 mt-2 bg-transparaent">
        <div className="container-fluid">
          <Link className="nav-link pb-2 fs-4" href="/">
            Club Ivy
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <FaBars className="social-icons fa-solid fa-bars" />

          {/*  <span className="navbar-toggler-icon"> </span> */}
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <div className="container-fluid">
              <ul className="navbar-nav">
                <li className="nav-item ">
                  <Link className="nav-link" href="/"></Link>
                </li>
                <li className="nav-item mt-1 m-2">
                  <div className="input-group">
                    <Link
                      href="/"
                      className="nav-link dropwdown-toggle "
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Menu
                      <span className=" m-2">
                        <i className="social-icons fa-solid fa-angle-down mr-1"></i>
                        <FaAngleDown className="social-icons fa-solid fa-angle-down mr-1" />
                      </span>
                    </Link>
                    <ul className="dropdown-menu" style={{ width: '15rem' }}>
                      <li>
                      <Link className="dropdown-item" href="/massages/">
                        Massages
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" href="/body-treatments/">
                        Body
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" href="/facials/">
                        facials
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" href="/waxing-treatments/">
                        Waxing
                      </Link>
                    </li>       
                    </ul>
                  </div>
                </li>
                
                <li className="nav-item px-2 mt-2">
                  <Link className="nav-link" href="/team/">
                    Staff
                  </Link>
                </li>
                <li className="nav-item px-2 mt-2">
                  <Link className="nav-link" href="/about/">
                    About
                  </Link>
                </li>
                <li className="nav-item px-2 mt-2">
                  <Link className="nav-link" href="/contact/">
                    Contact
                  </Link>
                </li>
                <li className="nav-item px-2 mt-2">
                  <Link className="nav-link" href="/login/">
                    Login
                  </Link>
                </li>
                
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}