import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/home">
          <img src="/navbar-icon.png" className="navbar-icon" />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <NavLink className="nav-item nav-link" to="/classes">
              <h5 className="nav-title">Classes</h5>
            </NavLink>

            <NavLink className="nav-item nav-link" to="/spells">
              <h5 className="nav-title">Spells</h5>
            </NavLink>
          </ul>
        </div>
      </div>
    </nav>
  );
};
