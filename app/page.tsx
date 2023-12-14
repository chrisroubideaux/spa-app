// homepage
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/misc/Footer';
import Cover from '@/components/hero/Cover';

export default function Home() {
  return (
    <>
      <Navbar />
        <div className="layout mt-3">
          <Cover />
        </div>
      <Footer />
    </>
  )
}
