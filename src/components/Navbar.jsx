import { useState } from 'react';

const Navbar = () => {
  const [userName, setUserName] = useState("Bob");

  return (
    <div className="navbar">
      <div className="logo">
        Very Cool Logo
      </div>

      <div className="links">
        <p className="welcome">{`Welcome, ${userName}`}</p>

        <button className="settings">Settings</button>
        <button className="sign-out">Sign Out</button>
      </div>

    </div>
  );
}

export default Navbar;
