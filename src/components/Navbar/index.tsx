import React from "react";

import { Navbar } from "flowbite-react";

import VisibleLinks from "./VisibleLinks";

import { useLocation, useNavigate } from "react-router-dom";

import styles from "./Navbar.module.css";

const NavbarCustom = () => {
  const history = useNavigate();
  const location = useLocation();

  const goToRoute = (event: React.MouseEvent) => {
    event.preventDefault();

    const target: HTMLElement = event.target;

    const goTo: string | null = target.getAttribute("href");

    history(goTo as string);
  };

  const applyActiveClass = (route: string) => {
    return location.pathname === route ? "active" : "";
  };

  return (
    <>
      <Navbar fluid={true} rounded={true} className={styles["navbar-bg"]}>
        <Navbar.Brand>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Open_Library_tight_logo.svg/1280px-Open_Library_tight_logo.svg.png"
            className="mr-3 h-6 sm:h-9"
            alt="Online library logo"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Online Library Management
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <VisibleLinks
            goToRoute={goToRoute}
            applyActiveClass={applyActiveClass}
          />
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default NavbarCustom;
