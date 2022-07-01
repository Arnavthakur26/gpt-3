import React from "react";
import "./Navbar.css";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../assets/logo.svg";
import { useState } from "react";

const Menu = () => (
  <>
    <a href="#home">Home</a>
    <a href="#GPT3">What is GPT 3?</a>
    <a href="#features">Case Studies</a>
    <a href="#possibilities">Open AI</a>
    <a href="#blog">Libraries</a>
  </>
);
function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="gpt3_navbar">
      {" "}
      <div className="gpt3_navbar-links">
        <div className="gpt3_navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="gpt3_navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="gpt3_navbar-sign">
        <p>Sign in</p>
        <button>Sign Up</button>
      </div>
      <div className="gpt3_navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
      </div>
      {toggleMenu && (
        <div className="gpt3_navbar-menu_container scale-up-center">
          <div className="gpt3-navbar-menu_container-links">
            <Menu />
            <div className="gpt3-navbar-menu_container-links-sign">
              <p>Sign in</p>
              <button>Sign Up</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
