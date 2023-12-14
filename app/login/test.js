// test
// login page
'use client';
import Link from 'next/link';
import { FaFacebook, FaGoogle } from 'react-icons/fa';

const Login = () => {
  return (
    <>
      <div className="">
        <div className="container d-flex flex-wrap justify-content-center justify-content-xl-start">
          <div
            className="w-100 align-self-end pt-1 pt-md-4 pb-4"
            style={{ maxWidth: '26.25rem' }}
          >
            <Link className="nav-link text-underlined" href="/">
              back to menu
            </Link>
            <h1 className="text-center text-xl-start">Welcome Back</h1>
            <h6></h6>
            <p className="text-center text-xl-start pb-3 mb-3">
              Don’t have an account?{' '}
              <Link className="" href="/register/">
                Register here
              </Link>
            </p>

            <form className="needs-validation mb-2" novalidate>
              <div className="position-relative mb-4">
                <label for="email" className="form-label fs-base">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  id="email"
                  class="form-control form-control-lg"
                  required
                />
                <div className="invalid-feedback position-absolute start-0 top-100">
                  Please enter a valid email address!
                </div>
              </div>
              <div className="mb-4">
                <label for="password" class="form-label fs-base">
                  Password
                </label>
                {/* */}
                <div className="password-toggle">
                  <input
                    type="password"
                    placeholder="Password"
                    id="password"
                    className="form-control "
                    required
                  />
                  <label
                    className="password-toggle-btn"
                    aria-label="Show/hide password"
                  ></label>
                </div>
              </div>
              <div className="mb-4">
                <div className="form-check">
                  <input
                    type="checkbox"
                    id="remember"
                    className="form-check-input"
                  />
                  <label for="remember" className="form-check-label fs-base">
                    Remember me
                  </label>
                </div>
              </div>
              <button type="submit" className="btn btn-lg btn-lg w-100">
                Login
              </button>
            </form>
            <Link href="/accounts" className="">
              Forgot your password?
            </Link>
            <hr className="my-4" />
            <h6 className="text-center mb-4">
              Or sign in with your social network
            </h6>
            <div className="row row-cols-1 row-cols-sm-2">
              <div className="col mb-3">
                <ul className="nav justify-content-center list-unstyled d-flex pt-2 ">
                  <li className="ms-3">
                    <button className="text-muted bg-transparent border-0">
                      <FaFacebook className="social-icons m-2 fs-1" />
                    </button>
                  </li>
                  <li className="ms-3">
                    <button className="text-muted bg-transparent border-0">
                      <FaGoogle className="social-icons m-2 fs-1" />
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="w-100 align-self-end">
            <p class="nav d-block fs-xs text-center text-xl-start pb-2 mb-0">
              &copy;2024, All rights reserved.
              <a
                class="nav-link d-inline-block p-0"
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
          className=" mt-3 position-absolute top-0 end-0 w-50 h-100 bg-position-center bg-repeat-0 bg-size-cover d-none d-xl-block"
          style={{
            backgroundImage: ' url(../images/hero/hero1.png)',
            height: '100vh',
            backgroundSize: 'cover',
            borderRadius: '10px',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            borderRight: '1px solid #636fac',
            borderLeft: '1px solid #636fac',
          }}
        ></div>

        <a href="#top" className="btn-scroll-top btn-sm" data-scroll>
          <span class="btn-scroll-top-tooltip text-muted fs-sm me-2">Top</span>
          <i class="btn-scroll-top-icon bx bx-chevron-up"></i>
        </a>
      </div>
    </>
  );
};

export default Login;
