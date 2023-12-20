// banner component

'use client';
import Iconbar from '@/components/misc/Iconbar';

export default function Banners() {
  return (
    <div>
      <div className="container pt-5 mt-4">
        <h2 className="text-center pt-5 display-4">Skin Care</h2>
        <Iconbar />
        <p className="fw-normal text-center fs-5 pt-4 mt-2 p-5 m-2">
          Experience why Club Ivy stands out as the premier destination for
          massage therapy in our region. Explore our diverse array of massage
          offerings, ranging from blissful Swedish massages to invigorating deep
          tissue treatments. Whether you prefer the tranquility of aromatherapy
          sessions or the therapeutic benefits of hot stone treatments, Club Ivy
          offers tailored experiences to suit your needs. Schedule your session
          today with our skilled therapists or browse our calendar for special
          massage events. We eagerly await the opportunity to provide you with a
          rejuvenating and personalized experience!
        </p>
      </div>
    </div>
  );
}
