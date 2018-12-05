import React from "react";
import { Navbar, NavbarBrand, Nav, NavItem } from "reactstrap";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <div className="navContainer">
      <Navbar light expand="md">
        <Link to="/home">
          {" "}
          <NavbarBrand href="#">My Diary</NavbarBrand>
        </Link>

        <Nav className="ml-auto" navbar>
          <NavItem>
            <Link id="home-link" to="/home">
              Home
            </Link>
          </NavItem>
          <NavItem>
            <Link to="/create">Add Entry</Link>
          </NavItem>
          <NavItem>
            <Link to="/" onClick={handleClick}>
              Logout
            </Link>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
};
export default NavBar;
const handleClick = () => {
  localStorage.clear();
};
