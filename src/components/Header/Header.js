import dog from "../../Assets/dog.png"
import React from "react";
import { Nav, Logo, NavLink, Bars, NavMenu, NavBtn } from "./HeaderElements";

const Header = ({ toggle }) => {
  return (
    <div className="Container">
      <Nav>
        <Logo to="/">
          <img
            src={dog}
            alt="logo"
          />
        </Logo>
        <NavMenu>
          <NavLink className="menu-item" to="about" smooth={true}>
            About
          </NavLink>
        </NavMenu>
        <Bars onClick={toggle} />
      </Nav>
    </div>
  );
};

export default Header;
