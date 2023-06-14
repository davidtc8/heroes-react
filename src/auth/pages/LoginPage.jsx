import { useContext } from "react";
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../context/AuthContext";

export const LoginPage = () => {

  const { login } = useContext( AuthContext )
  
  const navigate = useNavigate();

  const onLogin = () => {

    // Si el localstorage tiene el valor de lastpath consiguelo y si no mandalo a la liga "/"
    const lastpath = localStorage.getItem('lastPath') || '/';

    login('Dave');
    navigate(lastpath, {
      replace: true
    });
  }

  return (
    <div className="container mt-5">
      <h1>Login</h1> 
      <hr />

      <button className="btn btn-primary" onClick={ onLogin }>
        Login
      </button>
    </div>
  )
}
