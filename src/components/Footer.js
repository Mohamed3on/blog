import React from 'react';
import Link from 'gatsby-link';

const Footer = () => (
  <ul
    style={{
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      listStyle: 'none',
      padding: 0
    }}
  >
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/about">about</Link>
    </li>
  </ul>
);
export default Footer;
