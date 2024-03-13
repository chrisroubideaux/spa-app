// login page
'use client';
import axios from 'axios';
import Link from 'next/link';
import { useState } from 'react';
import { FaFacebook, FaGoogle, FaChevronUp } from 'react-icons/fa';

const Login = () => {

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [error, setError] = useState(null);

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    try {
      // Send a POST request to the login endpoint using Axios
      const response = await axios.post(
        'https://midwest-realtors-95d2cdb37007.herokuapp.com/auth/login',
        formData
      );

      if (response.status === 200) {
        // Redirect to the profile page after successful login
        window.location.href = '/user';
      } else {
        const data = response.data;
        setError(data.message);
      }
    } catch (err) {
      console.error(err);
      setError(null);
    }
  };

  // Add Google login function
  const handleGoogleLogin = () => {
    // Redirect the user to Google OAuth login
    window.location.href =
      'https://ivy-database-87df4cfe65bb.herokuapp.com/auth/google/login';
  };

  // Facebook registration function
  const handleFacebookLogin = () => {
    const facebookOAuthURL =
      'https://ivy-database-87df4cfe65bb.herokuapp.com/auth/facebook/login';

    window.open(
      facebookOAuthURL,
      'Facebook OAuth',
      'width=300,height=300'
    );
  };



  return (
    <>
      <div className="">
        <div className="container d-flex flex-wrap justify-content-center justify-content-lg-start">
          <div className="pt-1 pt-md-4 pb-4">
            <Link className="nav-link text-underlined" href="/">
              back to menu
            </Link>
            <h1 className="text-center text-xl-start">Login</h1>
            <h6></h6>
            <p className="text-center text-xl-start pb-3 mb-3">
              Dont have an account?{' '}
              <Link className="text-dark" href="/register/">
                <small>register here</small>
              </Link>
            </p>
            <div className="">
              {/* */}
              <form className="form text-center m-auto">
                <input
                  className="form-control m-2 fw-bold"
                  required
                  type="text"
                  name="fullName"
                  //  value={formData.fullName}
                  //  onChange={handleChange}
                  placeholder="Enter Email"
                />

                <input
                  className="form-control m-2 fw-bold"
                  required
                  type="password"
                  name="password"
                  // value={formData.password}
                  //onChange={handleChange}
                  placeholder="Enter Password"
                />

                <div className="container mt-3">
                  {/*}
                  {errorMessage && (
                    <p className="text-danger">{errorMessage}</p>
                  )}
                  {successMessage && (
                    <p className="text-success">{successMessage}</p>
                  )}
                  */}
                  <button className="w-100 btn btn-md fw-bold" type="submit">
                    login
                  </button>
                </div>
              </form>
              {/* */}

              <hr className="my-4" />
              <h6 className="text-center mb-4">Or register with</h6>
              <ul className="nav justify-content-center list-unstyled d-flex pt-1 ">
                <li className="ms-3">
                  <button className="text-muted bg-transparent border-0">
                    <FaFacebook className="social-icons m-2 fs-3" />
                  </button>
                </li>
                <li className="ms-3">
                  <button className="text-muted bg-transparent border-0"  
                      onClick={handleGoogleLogin}>
                    <FaGoogle className="social-icons m-2 fs-3" />
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-100 align-self-end">
            <p className="nav d-block fs-xs text-center text-xl-start pb-2 mb-0">
              &copy;2024, All rights reserved.
              <a
                className="nav-link d-inline-block p-0"
                href="https://createx.studio/"
                target="_blank"
                rel="noopener"
              >
                Club Ivy
              </a>
            </p>
          </div>
        </div>
        <div
          className=" mt-3 position-absolute top-0 end-0 w-50 d-none d-xl-block"
          style={{
            backgroundImage: ' url(../hero/login.png)',
            height: '90vh',
            backgroundSize: 'cover',
            borderRadius: '10px',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            boxShadow: '0 0 20px 0 rgb(0 0 0 / 30%) ',
          }}
        ></div>

        <a href="#top" className="btn-scroll-top btn-sm" data-scroll>
          <span className="btn-scroll-top-tooltip text-muted fs-sm me-2">
            Top
          </span>
          <FaChevronUp className="btn-scroll-top-icon bx bx-chevron-up" />
        </a>
      </div>
    </>
  );
};

export default Login;
