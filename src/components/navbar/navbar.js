import React from "react";
import {
  Navbar as ReactNavbar,
  Collapse,
  Nav,
  NavItem,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  NavbarToggler,
} from "reactstrap";

import { LanguageSelector, Link } from "..";

import "./navbar.scss";

import { navigationLinks } from "../../content";
import { useNavbarState } from "./navbar.state";
import { useI18next } from "gatsby-plugin-react-i18next";

export function Navbar() {
  const { t } = useI18next();
  const { navbarState, toggle, toggleDropdown, closeMobileMenu, linkActive } = useNavbarState();

  return (
    <div className="placeholder">
      <ReactNavbar color="faded" dark expand="lg" fixed="top" className="navbar-container">
        <Link external={false} to="/" className="navbar-brand">
          <img src={navbarState.sunesisLogo} alt="" />
        </Link>
        <NavbarToggler onClick={() => toggle()} />
        <Collapse isOpen={navbarState.isOpen} navbar>
          <Nav className="ml-auto navbar-items" navbar>
            {navigationLinks.map((nav, ix) =>
              nav.children ? (
                <Dropdown key={ix} nav isOpen={navbarState.dropdownOpenIndex === ix} toggle={() => toggleDropdown(ix)}>
                  <DropdownToggle nav caret className={linkActive(nav.href)}>
                    {t(nav.name)}
                  </DropdownToggle>
                  <DropdownMenu className="">
                    {nav.children.map((child, childKey) => (
                      <Link
                        onClick={() => {
                          toggleDropdown(ix);
                          closeMobileMenu();
                        }}
                        key={childKey}
                        to={child.href}
                        className={`${linkActive(child.href)} dropdown-item`}
                      >
                        {t(child.name)}
                      </Link>
                    ))}
                  </DropdownMenu>
                </Dropdown>
              ) : (
                <NavItem key={ix} className="nav-item">
                  {!nav.external && (
                    <Link
                      onClick={() => closeMobileMenu()}
                      to={nav.href}
                      className={`${linkActive(nav.href)} nav-link`}
                    >
                      {t(nav.name)}
                    </Link>
                  )}
                  {nav.external && (
                    <a
                      href={nav.href}
                      rel="noopener noreferrer"
                      target="_blank"
                      className={`${linkActive(nav.href)} nav-link`}
                    >
                      {t(nav.name)}
                    </a>
                  )}
                </NavItem>
              )
            )}
            <LanguageSelector compact dark />
          </Nav>
        </Collapse>
      </ReactNavbar>
    </div>
  );
}
