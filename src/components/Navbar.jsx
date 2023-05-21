import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [userName, setUserName] = useState("Bob");

  return (
    <div className="navbar">
      <Link to="/" className="link">
        <div className="logo">
          Very Cool Logo
        </div>
      </Link>

      <div className="links">
        <p className="welcome">{`Welcome, ${userName}`}</p>

        <Link to="/create" className="new-item">New Item</Link>
        <Link className="sign-out">Sign Out</Link>
      </div>

    </div>
  );
}

export default Navbar;
