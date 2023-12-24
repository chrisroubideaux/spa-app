// banner component
'use client';
import Iconbar from '@/components/misc/Iconbar';

export default function Banners() {
  return (
    <div>
      <div className="container pt-5 mt-4">
        <h2 className="text-center pt-5 display-4">Waxing Treatments</h2>
        <Iconbar />
        <p className="fw-normal text-center fs-5 pt-4 mt-2 p-5 m-2">
          Explore our exclusive range of body treatments at Club Ivy. From the
          rejuvenating body wrap and invigorating back peel to the detoxifying
          seaweed wrap and exfoliating body scrub, our treatments are designed
          to revitalize and pamper your body. Each service is meticulously
          crafted to offer a unique experience, leaving you feeling refreshed,
          renewed, and revitalized. Schedule your session today to indulge in a
          personalized and luxurious body treatment!
        </p>
      </div>
    </div>
  );
}
