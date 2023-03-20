import { Navbar } from "flowbite-react";

import { useLocation, useNavigate } from "react-router-dom";
import routes from "../../js/routes";

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
          <Navbar.Link
            onClick={goToRoute}
            href={routes.home}
            className={applyActiveClass(routes.home)}
            active={location.pathname === routes.home}
          >
            Home
          </Navbar.Link>
          <Navbar.Link
            onClick={goToRoute}
            href={routes.login}
            className={applyActiveClass(routes.login)}
            active={location.pathname === routes.login}
          >
            User Login
          </Navbar.Link>
          <Navbar.Link
            onClick={goToRoute}
            href={routes.signup}
            className={applyActiveClass(routes.signup)}
            active={location.pathname === routes.signup}
          >
            User Signup
          </Navbar.Link>
          <Navbar.Link
            onClick={goToRoute}
            href={routes.adminLogin}
            className={applyActiveClass(routes.adminLogin)}
            active={location.pathname === routes.adminLogin}
          >
            Admin Login
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default NavbarCustom;
