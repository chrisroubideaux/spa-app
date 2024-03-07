// register page
"use client";
import Link from 'next/link';
import axios from 'axios';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

import { FaFacebook, FaGoogle, FaChevronUp } from 'react-icons/fa';



const Register = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  // success and error messages
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  // Handle form data change
  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  // Handle form submission
  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        'https://ivy-client-5e9387cb37e4.herokuapp.com/register',
        formData
      );

      if (response.status === 201) {
        const { token } = response.data;
        localStorage.setItem('token', token);

        // Check if redirectTo is present in the response
        if (response.data.redirectTo) {
          router.push(response.data.redirectTo);
        }

        setSuccessMessage('Registration successful!.');
      } else {
        setErrorMessage(response.data.message);
      }
    } catch (error) {
      console.error('Error during registration:', error);
      setErrorMessage('Internal server error');
    }
  };

  // Google registration function
  const handleGoogleRegister = () => {
    // Define the Google OAuth registration URL
    const googleOAuthURL =
      'https://ivy-client-5e9387cb37e4.herokuapp.com/auth/google/register';

    // Open the Google OAuth URL in a popup window
    window.open(
      googleOAuthURL,
      'Google OAuth',
      'width=300,height=300'
    );
  };
  // Facebook registration function
  const handleFacebookRegister = () => {
    // Define the Facebook OAuth registration URL
    const facebookOAuthURL =
      'https://ivy-client-5e9387cb37e4.herokuapp.com/auth/facebook/register';

    // Open the Facebook OAuth URL in a popup window
    window.open(
      facebookOAuthURL,
      'Facebook OAuth',
      'width=300,height=300'
    );
  };

  return (
    <div className="">
      <div className="container d-flex flex-wrap justify-content-center justify-content-lg-start">
        <div className="pt-1 pt-md-4 pb-4">
          <Link className="nav-link text-underlined" href="/">
            back to menu
          </Link>
          <h1 className="text-center text-xl-start">Register</h1>
          <h6></h6>
          <p className="text-center text-xl-start pb-3 mb-3">
            Already have an account?{' '}
            <Link className="text-dark" href="/login/">
              <small>login here</small>
            </Link>
          </p>
          <div className="">
            {/* */}
            <form className="form text-center" onSubmit={handleSubmit}>
              <input
                className="form-control m-2 fw-bold"
                required
                type="text"
                name="fullName"
                  value={formData.fullName}
                 onChange={handleChange}
                placeholder="Enter Full Name"
              />
              <input
                className="form-control m-2 fw-bold"
                required
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter Email"
              />
              <input
                className="form-control m-2 fw-bold"
                required
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter Password"
              />
              <input
                className="form-control m-2 fw-bold"
                required
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm Password"
              />

              <div className="container mt-3">
                
                  {errorMessage && (
                    <p className="text-danger">{errorMessage}</p>
                  )}
                  {successMessage && (
                    <p className="text-success">{successMessage}</p>
                  )}
                  
                <button className="w-100 btn btn-md fw-bold" type="submit">
                  register
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
                <button className="text-muted bg-transparent border-0">
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
        className=" mt-3 position-absolute top-0 end-0 w-50   d-none d-xl-block"
        style={{
          backgroundImage: ' url(../hero/register.png)',
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
  );
};

export default Register;
