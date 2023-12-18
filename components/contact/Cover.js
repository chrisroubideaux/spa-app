// cover component

'use client';
// cover component

export default function Cover() {
  return (
    <>
      <header className="position-relative">
        <div
          className=" opacity-dark h-100 "
          style={{
            backgroundImage:
              ' linear-gradient(#2d3245b3, #04091eb3), url(../misc/misc3.png)',
            height: '32rem',
            backgroundSize: 'cover',
            borderRadius: '30px',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        ></div>
      </header>
    </>
  );
}
