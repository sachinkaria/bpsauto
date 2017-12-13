import React from 'react';
import {Link} from 'react-router';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import ErrorHandler from '../containers/ErrorHandler';
import SuccessHandler from '../containers/SuccessHandler';
import isAuthenticated from '../utils/isAuthenticated';


const NavigationBar = (props) => {
    return (
      <div>
        <Navbar fixedTop className="gc-navbar">
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/" className="gc-padding-none">
                <p>BPS Autocare</p>
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <ErrorHandler />
          <SuccessHandler />
          <Navbar.Collapse className="gc-navbar-dropdown">
            {
              isAuthenticated() && (
                <div>
                  <Nav pullRight>
                    <NavItem>
                      <Link>
                        <p className="gc-text gc-text--dark-grey">
                          Dashboard
                        </p>
                      </Link>
                    </NavItem>
                    <NavItem>
                      <Link to={'/logout'}>
                        <p className="gc-text gc-text--dark-grey">Sign out</p>
                      </Link>
                    </NavItem>
                  </Nav>
                </div>
              )
            }
            {
              (!isAuthenticated()) && (
                <Nav pullRight>
                  <NavItem>
                    <Link to={'/register'}>
                      <p className="gc-text gc-text--dark-grey">Sign up</p>
                    </Link>
                  </NavItem>
                  <NavItem>
                    <Link to={'/login'}>
                      <p className="gc-text gc-text--dark-grey">Login</p>
                    </Link>
                  </NavItem>
                </Nav>
              )
            }
          </Navbar.Collapse>
        </Navbar>
        <div className="gc-container" style={{ marginTop: '84px'}}>
          {props.children}
        </div>
      </div>
    );
  };

export default NavigationBar;
