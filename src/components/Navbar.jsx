import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [userName, setUserName] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    setUserName(sessionStorage.getItem("userName"));
  }, [sessionStorage.getItem("userName")]);

  const handleSignOut = () => {
    sessionStorage.clear();
    navigate("/login");
  }

  return (
    <div className="navbar">
      <Link to="/" className="link">
        <div className="logo">
          Very Cool Logo
        </div>
      </Link>
      { userName === "admin" && <Link to="/accounts" className="account-list" >Account List</Link> }

      { userName && (
      <div className="links">
         <p className="welcome">{`Welcome, ${userName}`}</p>

        <Link to="/create" className="new-item">New Item</Link>
        <button className="sign-out" onClick={handleSignOut}>Sign Out</button>
      </div>
      )}

      { !userName && (
        <div className="non-login-links">
          <Link to="/login" className="login">Login</Link>
          <Link to="/register" className="register">Register</Link>
        </div>
      )}

    </div>
  );
}

export default Navbar;
