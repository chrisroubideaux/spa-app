'use client';
import Iconbar from '@/components/misc/Iconbar';

export default function Banners() {
  return (
    <div>
      <div className="container pt-5 mt-4">
        <h2 className="text-center pt-5 display-4">Meet the Team at Club Ivy</h2>
        <Iconbar />
        <p className="fw-normal text-center fs-5 pt-4 mt-2 p-5 m-2">
           Discover the exceptional team behind Club Ivy, your premier destination for
           massage therapy in our region. Meet our skilled therapists and explore our diverse
           array of massage offerings, from the tranquility of aromatherapy sessions to the
           therapeutic benefits of invigorating deep tissue treatments and hot stone therapies.
           Club Ivy is dedicated to offering tailored experiences to suit your needs. Schedule
           your session today with our skilled team or browse our calendar for special massage
           events. We are excited to introduce you to our team and provide you with a rejuvenating
           and personalized experience!
        </p>
      </div>
    </div>
  );
}
