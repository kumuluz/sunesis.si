import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import { translate } from 'react-i18next';
import { Navbar, Collapse, Nav, NavItem, Dropdown, DropdownToggle, DropdownMenu, NavbarToggler } from 'reactstrap';

import './navbar.scss';
import sunesisLogo from './sunesis-logo.svg';
import sunesisWhiteLogo from './sunesis-logo-white.svg';

import { navigation } from '../../content/links';
import { LanguageSelector } from '..';
import {MEDIA_TABLET, returnScreenSize} from "../../layouts/common";

@translate()
export class NavbarComponent extends Component {
  static propTypes = {
    t: PropTypes.func
  };

  constructor(props) {
    super(props);

    this.toggleDropdown = this.toggleDropdown.bind(this);

    this.state = {
      isOpen: false,
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
        ...this.state,
      isOpen: !this.state.isOpen
    });
  }

  toggleDropdown() {
    this.setState({
        ...this.state,
        dropdownOpen: !this.state.dropdownOpen
    });
  }

  closeMobileMenu() {
    const screenSize = returnScreenSize();
    if (screenSize <= MEDIA_TABLET) {
      this.setState({
          ...this.state,
          isOpen: false
      })
    }
  }

  linkActive(path) {
    if (typeof window !== 'undefined') {
      if (window.location.pathname.includes(path)) {
        if (window.location.pathname === path || window.location.pathname === path + '/') {
          return 'active';
        }
        return 'active plus position-relative';
      }
    }
  }

  render() {
    const { t } = this.props;

    const logoImage = returnScreenSize() > MEDIA_TABLET ? sunesisLogo : sunesisWhiteLogo;

    return (
      <div className="placeholder">
        <Navbar color="faded" dark expand="lg" fixed="top" className="navbar-container" style={{width: "100vw"}}>
          <div className="container">
            <Link to="/" className="navbar-brand" style={{marginLeft: "10px"}}>
              <img src={logoImage} alt="" />
            </Link>
            <NavbarToggler onClick={() => this.toggle()} style={{marginRight: "10px"}} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                {navigation(t).map(
                  (nav, key) =>
                    (nav.children && (
                      <Dropdown key={key} nav isOpen={this.state.dropdownOpen} toggle={this.toggleDropdown}>
                        <DropdownToggle nav caret className={this.linkActive(nav.href)}>
                          {nav.name}
                        </DropdownToggle>
                        <DropdownMenu>
                          {nav.children.map((child, childKey) => (
                            <Link onClick={() => {
                              this.toggleDropdown();
                                this.closeMobileMenu();
                            }} key={childKey} to={child.href} className={`${this.linkActive(child.href)} dropdown-item`}>
                              {child.name}
                            </Link>
                          ))}
                        </DropdownMenu>
                      </Dropdown>
                    )) || (
                      <NavItem key={key}>
                        {!nav.external && (
                          <Link onClick={() => this.closeMobileMenu()} to={nav.href} className={`${this.linkActive(nav.href)} nav-link`}>
                            {nav.name}
                          </Link>
                        )}
                        {nav.external && (
                          <a href={nav.href} rel="noopener noreferrer" target="_blank" className={`${this.linkActive(nav.href)} nav-link`}>
                            {nav.name}
                          </a>
                        )}
                      </NavItem>
                    )
                )}
                <Link className="ml-5 btn btn-primary lh-30 mr-5" onClick={() => this.closeMobileMenu()} to="/about/sunesis#footer">
                  {t('menu.contactUs')}
                </Link>
                <LanguageSelector compact dark />
              </Nav>
            </Collapse>
          </div>
        </Navbar>
      </div>
    );
  }
}
