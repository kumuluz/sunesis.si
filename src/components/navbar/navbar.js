import React from 'react';
import {Navbar as ReactNavbar, Collapse, Nav, NavItem, Dropdown, DropdownToggle, DropdownMenu, NavbarToggler} from 'reactstrap';

import {LanguageSelector, Link} from '..';

import './navbar.scss';

import {navigationLinks, rightNavigationLinks} from '../../content';
import {useNavbarState} from "./navbar.state";
import {useI18next} from "gatsby-plugin-react-i18next";

export function Navbar() {
    const {t} = useI18next();
    const {navbarState, toggle, toggleDropdown, closeMobileMenu, linkActive} = useNavbarState();
    
    return (
        <div className="placeholder">
            <ReactNavbar color="faded" dark expand="lg" fixed="top" className="navbar-container"
                style={{width: "100vw"}}>
                <div className="container">
                    <Link external={false} to="/" className="navbar-brand" style={{marginLeft: "10px"}}>
                        <img src={navbarState.sunesisLogo} alt=""/>
                    </Link>
                    <NavbarToggler onClick={() => toggle()} style={{marginRight: "10px"}}/>
                    <Collapse isOpen={navbarState.isOpen} navbar>
                        <Nav className="left-nav" navbar>
                            {navigationLinks.map((nav, index) => (
                                <NavItem key={index}>
                                    <Link external={nav.external} to={nav.href} className={`${linkActive(nav.href)} nav-link`}
                                        onClick={closeMobileMenu}>
                                        {t(nav.name)}
                                    </Link>
                                </NavItem>
                            ))}
                        </Nav>
                        <Nav className="ml-auto right-navbar" navbar>
                            {rightNavigationLinks.map(
                                (nav, key) =>
                                    (nav.children && (
                                        <Dropdown key={key} nav isOpen={navbarState.dropdownOpen}
                                            toggle={toggleDropdown}>
                                            <DropdownToggle nav caret className={linkActive(nav.href)}>
                                                {t(nav.name)}
                                            </DropdownToggle>
                                            <DropdownMenu>
                                                {nav.children.map((child, childKey) => (
                                                    <Link onClick={() => {
                                                        toggleDropdown();
                                                        closeMobileMenu();
                                                    }} key={childKey} to={child.href}
                                                        className={`${linkActive(child.href)} dropdown-item`}>
                                                        {t(child.name)}
                                                    </Link>
                                                ))}
                                            </DropdownMenu>
                                        </Dropdown>
                                    )) || (
                                        <NavItem key={key}>
                                            {!nav.external && (
                                                <Link onClick={() => closeMobileMenu()} to={nav.href}
                                                    className={`${linkActive(nav.href)} nav-link`}>
                                                    {t(nav.name)}
                                                </Link>
                                            )}
                                            {nav.external && (
                                                <a href={nav.href} rel="noopener noreferrer" target="_blank"
                                                    className={`${linkActive(nav.href)} nav-link`}>
                                                    {t(nav.name)}
                                                </a>
                                            )}
                                        </NavItem>
                                    )
                            )}
                            <LanguageSelector compact dark/>
                        </Nav>
                    </Collapse>
                </div>
            </ReactNavbar>
        </div>
    );
}
