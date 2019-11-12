import React from 'react';
import PropTypes from 'prop-types';

function Navbar(props) {
  const { title, icon } = props;
  return (
    <header className="navbar">
      <section className="navbar-section">
        <a href="..." className="navbar-brand mr-2">
          <i className={`icon ${icon}`}></i> {title}
        </a>
      </section>
      <section className="navbar-section">
        <a href="#" className="btn btn-link">
          Home
        </a>
        <a href="#" className="btn btn-link">
          About
        </a>
      </section>
    </header>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  title: 'Github Finder',
  icon: 'icon-people',
};

export default Navbar;
