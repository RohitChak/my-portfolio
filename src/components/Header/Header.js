import React from "react";
import { Nav, Logo, NavLink, Bars, NavMenu, NavBtn, PrimaryBtn } from "./HeaderElements";

const Header = ({ toggle }) => {
  return (
    <div className="Container" style={{padding: 0}}>
      <Nav>
        <Logo to="/">
          <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="logo" />
        </Logo>
        <NavMenu>
          <NavLink className="menu-item" to="projects">Projects</NavLink>
          <NavLink className="menu-item" to="about">About</NavLink>
          <NavLink className="menu-item" to="contact">Contact</NavLink>
        </NavMenu>
        <NavBtn>
          <PrimaryBtn
            href="https://drive.google.com/file/d/1jwopncroOdzeDsUvh1Bp6SNVQh6-Gn92/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </PrimaryBtn>
        </NavBtn>
        <Bars onClick={toggle} />
      </Nav>
    </div>
  );
};

export default Header;