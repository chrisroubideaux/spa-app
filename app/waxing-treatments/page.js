// waxing services page

import Navbar from '@/components/navbar/Navbar';
import Cover from '@/components/waxing-treatments/Cover';
import Banner from '@/components/waxing-treatments/Banner';
import Cards from '@/components/waxing-treatments/Cards';
import Reviews from '@/components/waxing-treatments/Reviews';
import Details from '@/components/misc/Details';
import Footer from '@/components/misc/Footer';

import waxings from '@/data/waxings';

function page() {
  return (
    <>
      <Navbar />
      <Cover />
      <div className="layout mt-3 h-100">
        <Banner />
        <div className="container px-4 py-5">
          <div className="row row-cols-1 row-cols-1 row-cols-lg-3 row-cols-lg-4 g-4 py-4">
            {waxings.map((waxings) => (
              <div key={waxings.id} className="pt-4 ">
                <Cards waxings={waxings} />
              </div>
            ))}
          </div>

          <hr className="hr" />
          <h1 className=" text-center py-5 my-5">Reviews</h1>
          <div className="">
            <Reviews />
            <Details />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default page;
