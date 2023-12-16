//about page
import Navbar from '@/components/navbar/Navbar';
import Hero from '@/components/about/Hero';
import Mission from '@/components/about/Mission';
import Footer from '@/components/misc/Footer';

export default function page() {
  return (
    <>
      <Navbar />
      <div className="layout h-100 mt-3">
        <Hero />

        <div className="container py-5 my-5 ">
          <h2 className="text-center py-5 display-3">About</h2>
          <hr className="hr text-center" />
          <Mission />
        </div>
      </div>

      <Footer />
    </>
  );
}
