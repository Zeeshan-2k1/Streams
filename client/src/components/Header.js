import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import GoogleAuth from './GoogleAuth';

class Header extends Component {
  render() {
    return (
      <div
        style={{ padding: '1rem', alignItems: 'center' }}
        className="ui secondary pointing menu"
      >
        <Link style={{ padding: '1rem', fontSize: '1.5rem' }} to="/">
          StreamZy
        </Link>
        <div className="right menu">
          <Link style={{ padding: '1rem', fontSize: '1.5rem' }} to="/">
            All Streams
          </Link>
        </div>
        <GoogleAuth />
      </div>
    );
  }
}

export default Header;
