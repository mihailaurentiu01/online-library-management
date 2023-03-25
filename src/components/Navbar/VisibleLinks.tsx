import React from "react";

import { Navbar, Dropdown } from "flowbite-react";

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

  const applyActiveToDropdown = (route: string) => {
    return location.pathname.startsWith(route) ? "isActive" : "";
  };

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

      {isLoggedIn && (
        <>
          <Navbar.Link
            onClick={goToRoute}
            href={routes.dashboard}
            className={applyActiveClass(routes.dashboard)}
            active={location.pathname === routes.dashboard}
          >
            Dashboard
          </Navbar.Link>

          <Dropdown
            arrowIcon={true}
            inline={true}
            label={
              <Navbar.Collapse>
                <Navbar.Link
                  className={applyActiveToDropdown(routes.category)}
                  href=""
                  onClick={(e) => e.preventDefault()}
                  active={false}
                >
                  Categories
                </Navbar.Link>
              </Navbar.Collapse>
            }
          >
            <Dropdown.Header>
              <span className="block text-sm">Manage your categories</span>
            </Dropdown.Header>
            <Dropdown.Item>
              <a
                className="w-full sm:w-fit"
                href={routes.addCategory}
                onClick={goToRoute}
              >
                Add
              </a>
            </Dropdown.Item>
            <Dropdown.Item>
              <a
                className="w-full sm:w-fit"
                href={routes.category}
                onClick={goToRoute}
              >
                Manage
              </a>
            </Dropdown.Item>
          </Dropdown>

          <Dropdown
            arrowIcon={true}
            inline={true}
            label={
              <Navbar.Collapse>
                <Navbar.Link
                  className={applyActiveToDropdown(routes.author)}
                  href=""
                  onClick={(e) => e.preventDefault()}
                  active={false}
                >
                  Author
                </Navbar.Link>
              </Navbar.Collapse>
            }
          >
            <Dropdown.Header>
              <span className="block text-sm">Manage your authors</span>
            </Dropdown.Header>
            <Dropdown.Item>
              <a
                className="w-full sm:w-fit"
                href={routes.addAuthor}
                onClick={goToRoute}
              >
                Add
              </a>
            </Dropdown.Item>
            <Dropdown.Item>
              <a
                className="w-full sm:w-fit"
                href={routes.author}
                onClick={goToRoute}
              >
                Manage
              </a>
            </Dropdown.Item>
          </Dropdown>

          <Dropdown
            arrowIcon={true}
            inline={true}
            label={
              <Navbar.Collapse>
                <Navbar.Link
                  className={applyActiveToDropdown(routes.manageIssuedBooks)}
                  href=""
                  onClick={(e) => e.preventDefault()}
                  active={false}
                >
                  Issue
                </Navbar.Link>
              </Navbar.Collapse>
            }
          >
            <Dropdown.Header>
              <span className="block text-sm">Manage your issued books</span>
            </Dropdown.Header>
            <Dropdown.Item>
              <a
                className="w-full sm:w-fit"
                href={routes.issueNewBook}
                onClick={goToRoute}
              >
                Add
              </a>
            </Dropdown.Item>
            <Dropdown.Item>
              <a
                className="w-full sm:w-fit"
                href={routes.manageIssuedBooks}
                onClick={goToRoute}
              >
                Manage
              </a>
            </Dropdown.Item>
          </Dropdown>

          <Navbar.Link
            onClick={goToRoute}
            href={routes.regStudents}
            className={applyActiveClass(routes.regStudents)}
            active={location.pathname === routes.regStudents}
          >
            Students
          </Navbar.Link>
        </>
      )}
    </>
  );
};

export default VisibleLinks;
