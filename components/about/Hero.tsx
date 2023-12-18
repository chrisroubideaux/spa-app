'use client';
// cover component
import React, { useEffect, useState } from 'react';

export default function Heror() {
  // s
  const [currentStringIndex, setCurrentStringIndex] = useState(0);
  const textStrings = [
    'We provide Ultimate relaxation',
    'See why we are voted # 1',
    'Love giving back to the community',
  ];
  const typedText = textStrings[currentStringIndex];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStringIndex(
        (prevIndex) => (prevIndex + 1) % textStrings.length
      );
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [textStrings.length]);

  return (
    <>
      <header className="position-relative">
        <div
          className=" "
          style={{
            backgroundImage: ' linear-gradient(#2d3245b3, #04091eb3), url(../hero/about.png)',
            height: '32rem',
            backgroundSize: 'cover',
            borderRadius: '30px',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            boxShadow: '0px 0px 20px 0px rgba(0, 0, 0, 0.2)',
          }}
        ></div>
        <div className="position-absolute top-50 start-50 translate-middle">
          <h1 className="text-center text-white display-4">
            About Us{' '}
            <span className="text-warning">
              <h5 className="fs-3">{typedText} </h5>
            </span>{' '}
            Best in town
          </h1>
        </div>
      </header>
    </>
  );
}
