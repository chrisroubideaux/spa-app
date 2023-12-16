import Image from 'next/image';

function Mission() {
  return (
    <div className="container-fluid">
      <div className="row featurette pt-5">
        <div className="col-md-7">
          <h4 className="fw-normal display-5">Club {"Ivy's"} Main Mission</h4>
          <p className="fw-normal fs-5">
            At Club Ivy, our mission is to curate exceptional experiences. We are dedicated to crafting remarkable moments for our members. Our commitment extends to providing top-tier service, ensuring you discover unforgettable moments. Get in touch today and embark on your journey with Club Ivy. We take pride in being an integral part of this vibrant community.
          </p>
        </div>
        <div className="col-md-5 pt-2">
          <Image
            className="img-fluid image"
            src="/../images/misc/misc.png"
            width={500}
            height={500}
            alt="Test"
          />
        </div>
      </div>
      <hr className="hr mt-5" />
      <div className="row featurette pt-5">
        <div className="col-md-7 order-md-2">
          <h4 className="fw-normal display-5">Excellence Defined</h4>
          <p className="fw-normal fs-5">
            Experience why Club Ivy stands out in this industry. Our seasoned experts will guide you to your perfect haven. With over two decades of expertise,{"we've"} assisted countless individuals in finding their dream experiences. Our team is always available to answer your queries and ensure your experience is unparalleled.
          </p>
        </div>
        <div className="col-md-5 order-md-1">
          <Image
            className="img-fluid image"
            src="/../images/misc/misc1.png"
            width={500}
            height={500}
            alt="Test"
          />
        </div>
      </div>
      <hr className="hr mt-5" />
      <div className="row featurette pt-5 mt-5">
        <div className="col-md-7">
          <h4 className="ml-5 fw-normal display-5">Commitment to Excellence</h4>
          <p className="fw-normal fs-5">
            At Club Ivy, we constantly strive for excellence. Our commitment is to enhance our services continually and ensure unparalleled experiences for our clients. We aim to provide an exceptional spa journey, always striving to make your visit to Club Ivy a memorable one.
          </p>
        </div>
        <div className="col-md-5">
          <Image
            className="img-fluid image"
            src="/../images/misc/misc2.png"
            width={500}
            height={500}
            alt="Test"
          />
        </div>
      </div>
    </div>
  );
}

export default Mission;
