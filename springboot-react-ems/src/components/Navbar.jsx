import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
    <div className="container">
      {/* Brand Logo */}
      <Link className="navbar-brand fw-bold fs-4 text-uppercase" to="/">
        EMS
      </Link>

      {/* Toggle button for mobile */}
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      {/* Navbar links */}
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <Link className="nav-link active fw-semibold" to="/">
              Employees
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link fw-semibold" to="/add">
              Add
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link fw-semibold" to="/login">
              Login
            </Link>
          </li>
          {/* <li className="nav-item">
            <Link className="nav-link fw-semibold" to="/register">
              Register
            </Link>
          </li> */}
        </ul>
      </div>
    </div>
  </nav>
);

export default Navbar;
