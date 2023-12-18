// bread crumbs for contact page
import Link from 'next/link';
//import { FaHouseUser } from 'react-icons/fa';

export default function Navbar() {
  return (
    <div>
      <div className=" page-title-overlap bg-accent">
        <div className="container-fluid d-lg-flex justify-content-between py-lg-3">
          <div className="order-lg-2 mb-3 mb-lg-0 pt-lg-2 ">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link href="/">home</Link>
                </li>
                <li className="breadcrumb-item">
                  <Link href="/servcies">Services</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  <Link href="/servcies">Contact Details</Link>
                </li>
              </ol>
            </nav>
            <div className="order-lg-1 pe-lg-4 text-center text-lg-start">
              <h3 className=" fs-1">Contact Details</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
