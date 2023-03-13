import { Navbar, Dropdown, Avatar } from "flowbite-react";

import styles from "./Navbar.module.css";

const NavbarCustom = () => {
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
          <Navbar.Link href="/navbars" active={true}>
            Home
          </Navbar.Link>
          <Navbar.Link href="/navbars">User Login</Navbar.Link>
          <Navbar.Link href="/navbars">User Signup</Navbar.Link>
          <Navbar.Link href="/navbars">Admin Login</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default NavbarCustom;
