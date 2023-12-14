'use client';
// cover component
import React, { useEffect, useState } from 'react';

export default function Cover() {
  // s
  const [currentStringIndex, setCurrentStringIndex] = useState(0);
  const textStrings = ['web development', 'mobile development', 'web design'];
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
            backgroundImage: ' url(../images/hero/hero.png)',
            height: '32rem',
            backgroundSize: 'cover',
            borderRadius: '30px',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            borderRight: '1px solid #636fac',
            borderLeft: '1px solid #636fac',
          }}
        >
          <span className="mask bg-gradient-primary"></span>
          <div className="container">
            <div className="row">
              <div className="col-lg-8 text-start">
                <h1 className="text-dark">
                  Our company mission is to lead the{' '}
                  <span className="text-white">{typedText}</span>
                </h1>
                <p className="lead text-dark text-start pe-5 mt-4">
                  The time is now for it to be okay to be great. People in this
                  world shun people for being great. For being a bright color.{' '}
                </p>
                <br />
                <div className="buttons">
                  <button type="button" className="btn btn-lg btn-white">
                    Contact Us
                  </button>
                  <button
                    type="button"
                    className="btn btn-lg btn-link text-white"
                  >
                    Read More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
         {/* 
        <div className="position-absolute w-100 z-index-1 bottom-0">
          <svg
            className="waves"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 24 150 40"
            preserveAspectRatio="none"
            shapeRendering="auto"
          >
           
            <defs>
              <path
                id="gentle-wave"
                d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
              />
            </defs>
            <g className="moving-waves animation">
              <use
                xlinkHref="#gentle-wave"
                x="48"
                y="-1"
                fill="rgba(251,251,251,0.40)"
              />
              <use
                xlinkHref="#gentle-wave"
                x="48"
                y="3"
                fill="rgba(251,251,251,0.35)"
              />
              <use
                xlinkHref="#gentle-wave"
                x="48"
                y="5"
                fill="rgba(251,251,251,0.25)"
              />
              <use
                xlinkHref="#gentle-wave"
                x="48"
                y="8"
                fill="rgba(251,251,251,0.20)"
              />
              <use
                xlinkHref="#gentle-wave"
                x="48"
                y="13"
                fill="rgba(251,251,251,0.15)"
              />
              <use
                xlinkHref="#gentle-wave"
                x="48"
                y="16"
                fill="rgba(251,251,251,0.95)"
              />
            </g>
          </svg>
        </div>
        */}
      </header>
    </>
  );
}
