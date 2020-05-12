import React, {Component} from 'react';
import * as PropTypes from 'prop-types';
import {FormattedMessage} from "react-intl";
import {InternalLink} from "../links";
import {Navbar, Collapse, Nav, NavItem, Dropdown, DropdownToggle, DropdownMenu, NavbarToggler} from 'reactstrap';

import {LanguageSelector} from '..';
import {MEDIA_TABLET, returnScreenSize} from "../../layouts/common";

import sunesisLogo from './sunesis-logo.svg';
import sunesisWhiteLogo from './sunesis-logo-white.svg';
import './navbar.scss';

import {navigationLinks, rightNavigationLinks} from '../../content';

export class NavbarComponent extends Component {
    static propTypes = {
        locale: PropTypes.string
    };
    
    constructor(props) {
        super(props);
        
        this.toggleDropdown = this.toggleDropdown.bind(this);
        
        this.state = {
            isOpen: false,
            dropdownOpen: false,
            sunesisLogo: sunesisLogo
        };
    }
    
    componentDidMount() {
        window.addEventListener("resize", (e) => {
            this.setState({
                ...this.state,
                sunesisLogo: returnScreenSize() > MEDIA_TABLET ? sunesisLogo : sunesisWhiteLogo
            })
        })
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
        const {locale} = this.props;
        
        return (
            <div className="placeholder">
                <Navbar color="faded" dark expand="lg" fixed="top" className="navbar-container"
                    style={{width: "100vw"}}>
                    <div className="container">
                        <InternalLink to="/" className="navbar-brand" style={{marginLeft: "10px"}}>
                            <img src={this.state.sunesisLogo} alt=""/>
                        </InternalLink>
                        <NavbarToggler onClick={() => this.toggle()} style={{marginRight: "10px"}}/>
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="left-nav" navbar>
                                {navigationLinks.map((nav, index) => (
                                    <NavItem key={index}>
                                        {!nav.external && (
                                            <InternalLink onClick={() => this.closeMobileMenu()} to={nav.href}
                                                className={`${this.linkActive(nav.href)} nav-link`}>
                                                <FormattedMessage id={nav.name}/>
                                            </InternalLink>
                                        )}
                                        {nav.external && (
                                            <a href={nav.href} rel="noopener noreferrer" target="_blank"
                                                className={`${this.linkActive(nav.href)} nav-link`}>
                                                <FormattedMessage id={nav.name}/>
                                            </a>
                                        )}
                                    </NavItem>
                                ))}
                            </Nav>
                            <Nav className="ml-auto" navbar>
                                {rightNavigationLinks.map(
                                    (nav, key) =>
                                        (nav.children && (
                                            <Dropdown key={key} nav isOpen={this.state.dropdownOpen}
                                                toggle={this.toggleDropdown}>
                                                <DropdownToggle nav caret className={this.linkActive(nav.href)}>
                                                    <FormattedMessage id={nav.name}/>
                                                </DropdownToggle>
                                                <DropdownMenu>
                                                    {nav.children.map((child, childKey) => (
                                                        <InternalLink onClick={() => {
                                                            this.toggleDropdown();
                                                            this.closeMobileMenu();
                                                        }} key={childKey} to={child.href}
                                                            className={`${this.linkActive(child.href)} dropdown-item`}>
                                                            <FormattedMessage id={child.name}/>
                                                        </InternalLink>
                                                    ))}
                                                </DropdownMenu>
                                            </Dropdown>
                                        )) || (
                                            <NavItem key={key}>
                                                {!nav.external && (
                                                    <InternalLink onClick={() => this.closeMobileMenu()} to={nav.href}
                                                        className={`${this.linkActive(nav.href)} nav-link`}>
                                                        <FormattedMessage id={nav.name}/>
                                                    </InternalLink>
                                                )}
                                                {nav.external && (
                                                    <a href={nav.href} rel="noopener noreferrer" target="_blank"
                                                        className={`${this.linkActive(nav.href)} nav-link`}>
                                                        <FormattedMessage id={nav.name}/>
                                                    </a>
                                                )}
                                            </NavItem>
                                        )
                                )}
                                <LanguageSelector compact dark locale={locale}/>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
            </div>
        );
    }
}
