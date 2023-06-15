import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../auth/context/AuthContext";
import "../styles/navbar.css";

export const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  // Este es un custom hook creado por la gente de react-router-dom
  const navigate = useNavigate();

  const onLogout = () => {
    logout();
    navigate("/login", {
      // El replace evita que la persona pueda regresar al historial anterior
      replace: true,
    });
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Heroes React
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <NavLink
              className={({ isActive }) =>
                `nav-item nav-link ${isActive ? "active" : ""}`
              }
              to="/marvel"
            >
              Marvel
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className={({ isActive }) =>
                `nav-item nav-link ${isActive ? "active" : ""}`
              }
              to="/dc"
            >
              DC
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className={({ isActive }) =>
                `nav-item nav-link ${isActive ? "active" : ""}`
              }
              to="/searchpage"
            >
              Search
            </NavLink>
          </li>
          <li className="nav-item item_right">
            <ul className="navbar-nav ml-auto">
              <span className="nav-item nav-link text-primary">
                {user?.name}
              </span>
              <button className="nav-item nav-link btn" onClick={onLogout}>
                Logout
              </button>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  );
};

// <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
//   <Link className="navbar-brand" to="/">
//     Heroes React
//   </Link>

{
  /* <div className="navbar-collapse navMenu">
        <div className="navbar-nav">
          <NavLink 
          className={ ({isActive}) => `nav-item nav-link ${ isActive ? 'active' : '' }`} 
          to="/marvel">
            Marvel
          </NavLink>

          <NavLink 
          className={ ({isActive}) => `dc_item nav-item nav-link ${ isActive ? 'active' : '' }`} 
          to="/dc">
            DC
          </NavLink>

          <NavLink 
          className={ ({isActive}) => `nav-item nav-link ${ isActive ? 'active' : '' }`} 
          to="/searchpage">
            Search
          </NavLink>

          <div className="dot"></div>
        </div>
      </div>

      <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
        <ul className="navbar-nav ml-auto">
          <span className="nav-item nav-link text-primary">
            { user?.name }
          </span>
          <button className="nav-item nav-link btn" onClick={onLogout}>
            Logout
          </button>
        </ul>
      </div>
    </nav> */
}
