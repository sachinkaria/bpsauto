import React from 'react';
import {Link} from 'react-router';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import ErrorHandler from '../containers/ErrorHandler';
import SuccessHandler from '../containers/SuccessHandler';
import isAuthenticated from '../utils/isAuthenticated';


const NavigationBar = (props) => {
  return (
    <div>
      <Navbar fixedTop className="bp-navbar">
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/" className="bp-padding-none bp-margin-top--lg">
              <p>BPS Autocare</p>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <ErrorHandler />
        <SuccessHandler />
        <Navbar.Collapse className="bp-navbar-dropdown">
          {
            isAuthenticated() && (
              <div>
                <Nav pullRight>
                  <NavItem>
                    <Link to={'/dashboard'}>
                      <p className="bp-text bp-text--dark-grey">
                        Dashboard
                      </p>
                    </Link>
                  </NavItem>
                  <NavItem>
                    <Link to={'/logout'}>
                      <p className="bp-text bp-text--dark-grey">Sign out</p>
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
                    <p className="bp-text bp-text--dark-grey">Sign up</p>
                  </Link>
                </NavItem>
                <NavItem>
                  <Link to={'/login'}>
                    <p className="bp-text bp-text--dark-grey">Login</p>
                  </Link>
                </NavItem>
              </Nav>
            )
          }
        </Navbar.Collapse>
      </Navbar>
      <div className="bp-container" style={{marginTop: '84px'}}>
        {props.children}
      </div>
    </div>
  );
};

export default NavigationBar;
