import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/burgessLogo.png"

const Navbar = () => {

  const toggleBurgerMenu = (action) => {
    const burger = document.getElementById("navbarBurger");
    const navMenu = document.getElementById("navbarMenu");
    if (burger.classList.contains("is-active") || action === "close") {
      // close navbar dropdown
      burger.classList.remove("is-active");
      navMenu.classList.remove("is-active");
    } else {
      // open navbar dropdown
      burger.classList.add("is-active");
      navMenu.classList.add("is-active");
    }
  };

  // const closeDesktopDropdown = () => {
  //   const dropdown = document.getElementById("desktopDropdown")
  //   dropdown.classList.remove("is-active")
  // };

  window.addEventListener("click", function (e) {
    const burger = document.getElementById("navbarBurger");
    const navMenu = document.getElementById("navbarMenu");
    if (
      !navMenu.contains(e.target) &&
      !burger.contains(e.target) &&
      navMenu.classList.contains("is-active")
    ) {
      navMenu.classList.remove("is-active");
      burger.classList.remove("is-active");
    }
  });

  return (
    <nav className="navbar is-fixed-top" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="/">
      <img src={logo} alt="Simple logo saying Burgess" width="84" height="28"/>
    </a>

        <button
          className="navbar-burger"
          id="navbarBurger"
          onClick={() => toggleBurgerMenu()}
          aria-label="menu"
          aria-expanded="false"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </button>
      </div>

      <div id="navbarMenu" className="navbar-menu">
        <div className="navbar-start">
          <Link to="/" onClick={() => toggleBurgerMenu("close")} className="navbar-item">
            Home
          </Link>
          {/* Build issues */}
          {/* <div className="navbar-item has-dropdown hide-small-screens" id={"desktopDropdown"} onMouseEnter={() => {
            const dropdown = document.getElementById("desktopDropdown")
            dropdown.classList.add("is-active")
          }} onMouseLeave={() => {
            const dropdown = document.getElementById("desktopDropdown")
            dropdown.classList.remove("is-active")
          }}>
            <Link to="/projects" onClick={() => toggleBurgerMenu("close")} className="navbar-link">
              Projects
            </Link>

            <div className="navbar-dropdown">
              <Link to="/books" className="navbar-item" onClick={() => closeDesktopDropdown()}>
                SF Masterworks
              </Link>
              <Link to="/santorini" className="navbar-item" onClick={() => closeDesktopDropdown()}>
                Santorini
              </Link>
              <Link to="/react" className="navbar-item" onClick={() => closeDesktopDropdown()}>
                React
              </Link>
              <hr className="navbar-divider" />
              <Link to="/projects" className="navbar-item" onClick={() => closeDesktopDropdown()}>
                All Projects
              </Link>
            </div>
          </div> */}
          <Link to="/projects" onClick={() => toggleBurgerMenu("close")} className="navbar-item">
            Projects
          </Link>
          <Link to="/about" onClick={() => toggleBurgerMenu("close")} className="navbar-item">
            About
          </Link>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
