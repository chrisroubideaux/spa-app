// body page
// facials page

import Navbar from '@/components/navbar/Navbar';
import Cover from '@/components/body-treatments/Cover';
import Banner from '@/components/body-treatments/Banner';
import Cards from '@/components/body-treatments/Cards';
import Reviews from '@/components/body-treatments/Reviews';
import Details from '@/components/misc/Details';
import Footer from '@/components/misc/Footer';

import treatments from '@/data/treatments';

function page() {
  return (
    <>
      <Navbar />
      <Cover />
      <div className="layout mt-3 h-100">
        <Banner />
        <div className="container px-4 py-5">
          <div className="row row-cols-1 row-cols-1 row-cols-lg-3 row-cols-lg-4 g-4 py-4">
            {treatments.map((treatments) => (
              <div key={treatments.id} className="pt-4 ">
                <Cards treatments={treatments} />
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
