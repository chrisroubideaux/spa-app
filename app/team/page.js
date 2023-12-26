// page for employees

import Navbar from '@/components/navbar/Navbar';
import Cover from '@/components/hero/Cover';
// massage imports
import Banner from '@/components/misc/Banner';
import MassageAvatar from '@/components/massages/MassageAvatar';
import Reviews from '@/components/misc/Reviews';
// facial imports
import Avatar from '@/components/facials/Avatar';
// treatments imports
import TreatmentsAvatar from '@/components/body-treatments/TreatmentsAvatar';
// waxing imports
import WaxAvatar from '@/components/waxing-treatments/WaxAvatar';
// owners imports
import OwnerAvatar from '@/components/owners/OwnerAvatar';
// misc imports
import Details from '@/components/misc/Details';
import Footer from '@/components/misc/Footer';

// data for employees
import massages from '@/data/massages';
import facials from '@/data/facials';
import treatments from '@/data/treatments';
import waxings from '@/data/waxings';
import owners from '@/data/owners';

function page() {
  return (
    <>
      <Navbar />
      <div className="layout mt-3 h-100">
        <Cover />
        <Banner />
        <div className="container px-4 py-5">
          <h1 className=" text-center py-5 my-5">Owners</h1>
          <div className="row row-cols-lg-5 justify-content-center gy-3 mb-4">
            {owners.map((owner) => (
              <div key={owner.id} className="col py-3">
                <OwnerAvatar owners={owner} />
              </div>
            ))}
          </div>
          <hr className="hr" />
          <h1 className=" text-center py-5 my-5">Our massage specialist</h1>
          <div className="row row-cols-1 row-cols-1 row-cols-lg-3 row-cols-lg-4 g-4 py-4">
            {massages.map((massages) => (
              <div key={massages.id} className="pt-4 ">
                <MassageAvatar massages={massages} />
              </div>
            ))}
          </div>

          <hr className="hr" />
          <h1 className=" text-center py-5 my-5">Skin care team</h1>
          <div className="row row-cols-1 row-cols-1 row-cols-lg-3 row-cols-lg-4 g-4 py-4">
            {facials.map((facials) => (
              <div key={facials.id} className="pt-4 ">
                <Avatar facials={facials} />
              </div>
            ))}
          </div>
          <hr className="hr" />
          <h1 className=" text-center py-5 my-5">Body Treatments</h1>
          <div className="row row-cols-1 row-cols-1 row-cols-lg-3 row-cols-lg-4 g-4 py-4">
            {treatments.map((treatments) => (
              <div key={treatments.id} className="pt-4 ">
                <TreatmentsAvatar treatments={treatments} />
              </div>
            ))}
          </div>
          <hr className="hr" />
          <h1 className=" text-center py-5 my-5">Waxing</h1>
          <div className="row row-cols-1 row-cols-1 row-cols-lg-3 row-cols-lg-4 g-4 py-4">
            {waxings.map((waxings) => (
              <div key={waxings.id} className="pt-4 ">
                <WaxAvatar waxings={waxings} />
              </div>
            ))}
          </div>
          <h1 className=" text-center py-5 my-5">Reviews</h1>
          <div className="mt-1 py-4">
            <Reviews />
          </div>
        </div>
        <div className="mt-1 py-4">
          <Details />
        </div>
      </div>

      <Footer />
    </>
  );
}

export default page;
