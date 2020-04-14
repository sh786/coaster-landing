/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql, Link } from 'gatsby';

import Header from './header';
import '../../static/styles/main.scss';
import logo from '../../static/images/coaster-logo.png';
import iconTwitter from '../../static/images/icon-twitter.svg';
import iconLinkedin from '../../static/images/icon-linkedin.svg';
import iconGitHub from '../../static/images/icon-github.svg';
import iconInstagram from '../../static/images/icon-instagram.svg';

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={(data) => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <main>{children}</main>
        <footer>
          <div className="container">
            <div className="row">
              <div className="col-5">
                <div className="widget__item">
                  <div className="logo">
                    <Link to="/" title="Coaster App">
                      <img alt="Logo" src={logo} />
                    </Link>
                  </div>

                  <div className="about">
                    <p>
                      A mobile app in development for iOS and Android to pay for
                      cover charges and other bar purchases in advance. Never
                      wait in cover charge line again.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-4">
                <div className="widget__item">
                  <ul className="links">
                    <h4>Coaster Support</h4>
                    <ul>
                      <li>
                        <Link to="/contact" title="Contact Us">
                          Contact
                        </Link>
                      </li>
                    </ul>
                  </ul>
                </div>
              </div>

              <div className="col-3">
                <div className="widget__item">
                  <div className="social">
                    <a href="#" title="Twitter">
                      <img alt="Twitter" src={iconTwitter} />
                    </a>
                    <a href="#" title="LinkedIn">
                      <img alt="LinkedIn" src={iconLinkedin} />
                    </a>
                    <a href="#" title="Instagram">
                      <img alt="Instagram" src={iconInstagram} />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="copyright">
              <p>
                Copyright 2020,
                <a href="https://coastertech.com" title="Coaster App">
                  {' '}
                  Coaster
                </a>
                . All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
