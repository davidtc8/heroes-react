import { Link, NavLink, useNavigate } from "react-router-dom";

export const Navbar = () => {

  // Este es un custom hook creado por la gente de react-router-dom
  const navigate = useNavigate();

  const onLogout = () => {
    navigate('/login', {
      // El replace evita que la persona pueda regresar al historial anterior
      replace: true
    });
  }

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
      <Link className="navbar-brand" to="/">
        Heroes React
      </Link>

      <div className="navbar-collapse">
        <div className="navbar-nav">
          <NavLink 
          className={ ({isActive}) => `nav-item nav-link ${ isActive ? 'active' : '' }`} 
          to="/marvel">
            Marvel
          </NavLink>

          <NavLink 
          className={ ({isActive}) => `nav-item nav-link ${ isActive ? 'active' : '' }`} 
          to="/dc">
            DC
          </NavLink>

          <NavLink 
          className={ ({isActive}) => `nav-item nav-link ${ isActive ? 'active' : '' }`} 
          to="/searchpage">
            Search
          </NavLink>
        </div>
      </div>

      <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
        <ul className="navbar-nav ml-auto">
          <span className="nav-item nav-link text-primary">
            David
          </span>
          <button className="nav-item nav-link btn" onClick={onLogout}>
            Logout
          </button>
        </ul>
      </div>
    </nav>
  );
};
