import React from "react";

import { Navbar } from "flowbite-react";

import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

import routes from "../../js/routes";
import { RootState } from "../../store";

type VisibleLinksProps = {
  goToRoute: (event: React.MouseEvent) => void;
  applyActiveClass: (route: string) => string;
};
const VisibleLinks: React.FC<React.PropsWithChildren<VisibleLinksProps>> = ({
  goToRoute,
  applyActiveClass,
}) => {
  const location = useLocation();

  const { isLoggedIn } = useSelector((state: RootState) => state.user);

  return (
    <>
      {!isLoggedIn && (
        <>
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
        </>
      )}
    </>
  );
};

export default VisibleLinks;
