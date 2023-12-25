// navbar component
import Link from 'next/link';
import { FaAngleDown, FaSearch } from 'react-icons/fa';

export default function Navbar() {
  return (
    <>      
      <nav className="navbar navbar-expand-lg w-100 mt-2 bg-transparaent">
        <div className="container-fluid">
          <Link
            className="navbar-brand nav-link font-weight-bolder ms-3"
            href="/"          
          >
            Club Ivy
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navigation"
            aria-controls="navigation"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
          <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navigation">
            <ul className="navbar-nav navbar-nav-hover mx-auto">
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Services
                </Link>
                <ul className="dropdown-menu">
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
              </li>
              <li className="nav-item px-3">
                <Link className="nav-link" href="/staff/">
                  Staff
                </Link>
              </li>
              <li className="nav-item px-3">
                <Link className="nav-link" href="/about/">
                  About
                </Link>
              </li>
              <li className="nav-item px-3">
                <Link className="nav-link" href="/contact/">
                  Contact
                </Link>
              </li>
              <li className="nav-item px-3">
                <Link className="nav-link" href="/login/">
                  Login
                </Link>
              </li>
            </ul>            
          </div>
        </div>
      </nav>           
    </>
  );
}

