import React from "react";

const NavBar = () => {
  return (
    <div className="navContainer">
      <div id="brand-name">
        <a href="/home">
          <h2>My Diary</h2>
        </a>
      </div>
      <div>
        <nav>
          <a href="/home">Home</a>
          <a href="#">Add Entry</a>
          <div className="nav-right">
            <a href="#">Profile</a>
            <a href="#">Logout</a>
          </div>
        </nav>
      </div>
    </div>
  );
};
export default NavBar;
