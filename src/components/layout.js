import React from 'react';
import { Link } from 'gatsby';

import { rhythm, scale } from '../utils/typography';
import Footer from './Footer';
import styled from 'styled-components';

const HeaderLink = styled(Link)`
  box-shadow: none;
  color: inherit;
  &:hover {
    box-shadow: 0 1px 0 0 currentColor;
  }
`;

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props;
    const rootPath = `${__PATH_PREFIX__}/`;
    let header;

    if (location.pathname === rootPath) {
      header = (
        <h1
          style={{
            ...scale(1.5),
            marginBottom: rhythm(1.5),
            marginTop: 0,
          }}
        >
          <HeaderLink to={`/`}>{title}</HeaderLink>
        </h1>
      );
    } else {
      header = (
        <h3
          style={{
            marginTop: 0,
          }}
        >
          <HeaderLink to={`/`}>{title}</HeaderLink>
        </h3>
      );
    }
    return (
      <div
        style={{
          marginLeft: 'auto',
          marginRight: 'auto',
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        <header>{header}</header>
        <main>{children}</main>
        <Footer></Footer>
      </div>
    );
  }
}

export default Layout;
