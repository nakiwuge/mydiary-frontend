import React from "react";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

const NavBar = () => {
  return (
    <div className="navContainer">
      <Navbar  light expand="md">
        <NavbarBrand href="/home">My Diary</NavbarBrand>

        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink id="home-link"href="/home">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/create">Add Entry</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/" onClick={handleClick}>
              Logout
            </NavLink>
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
