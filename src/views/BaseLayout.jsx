import { Link, Outlet } from 'react-router-dom';
import './BaseLayout.css';

const BaseLayout = () => {
  return (
    <div className="layout">
      <header className="header">
        <div className="container d-flex align-items-center">
          <h1 className="logo">
            <Link className="text-decoration-none text-light" to="/">
              Purrfect Adoption
            </Link>
          </h1>
          <div className="flex-grow-1"></div>
          <nav>
            <ul className="nav">
              <li className="nav-item">
                <Link className="nav-link" to="/available-cats">
                  Available Cats
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact-us">
                  Contact Us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about-us">
                  About Us
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main id="content">
        <Outlet />
      </main>
      <footer className="bg-light">
        <p>&copy; {new Date().getFullYear()} Purrfect Adoption. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default BaseLayout;
