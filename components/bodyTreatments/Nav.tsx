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
                  <Link href="/body-treatments">Body Treatments</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  <Link href="/servcies">Details</Link>
                </li>
              </ol>
            </nav>
            <h4>Massage details</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
