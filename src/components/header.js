import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import logo from '../../static/images/coaster-logo.png';

const Header = ({ siteTitle }) => (
  <header>
    <div className="container">
      <div className="top-menu">
        <div className="logo">
          <Link to="/" title={siteTitle}>
            <img alt="Logo" src={logo} />
          </Link>
        </div>

        <div className="download-app">
          <span>
            Download App
            <p>(Summer 2020)</p>
          </span>
        </div>
      </div>
    </div>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
