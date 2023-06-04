import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.svg";
import "./navbar.css";

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
      <Link to="/">
        <div className="logo">
          <img src={logo} alt="Logo" />
          ダッシュボード
        </div>
      </Link>


      <div className="links">
        { userName && (
          <div className="logged-in">
            <p className="welcome">{`Welcome, ${userName}`}</p>
            <Link to="/create" className="new-item-btn">New Item</Link>
            <button className="sign-out-btn" onClick={handleSignOut}>Sign Out</button>
          </div>
        )}
        { userName === "admin" && <Link to="/accounts" className="accounts-btn" >Account List</Link> }

        { !userName && (
          <div className="logged-out">
            <Link to="/login" className="login-btn">Login</Link>
            <Link to="/register" className="register-btn">Register</Link>
          </div>
        )}
      </div>


    </div>
  );
}

export default Navbar;
