import React from 'react';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router';
import classNames from 'classnames';

const DashboardNavBar = (props) => {
  return (
    <div>
      <Navbar className="bp-dashboard-navbar">
        <ul>
          <div>
            <li className="bp-dashboard-navbar-item">
              <Link to={'/dashboard/account/settings'}>
                <p className={classNames('bp-text bp-light-grey', { 'bp-white': props.location.includes('account') })}>Account</p>
              </Link>
            </li>
            <li className="bp-dashboard-navbar-item">
              <Link to={'/dashboard/bookings'}>
                <p className={classNames('bp-text bp-light-grey', { 'bp-white': props.location.includes('bookings') })}>Bookings</p>
              </Link>
            </li>
          </div>
        </ul>
      </Navbar>
    </div>
  );
};

DashboardNavBar.propTypes = {
  location: React.PropTypes.string,
  userRole: React.PropTypes.string
};

DashboardNavBar.defaultProps = {
  location: '/home',
  userRole: 'user'
};

export default DashboardNavBar;
