import React from 'react';
import { Link } from 'gatsby';
import TwitterIcon from './icons/TwitterIcon';
import LinkedInIcon from './icons/LinkedInIcon';
import InstagramIcon from './icons/InstagramIcon';

import HoverableIcon from './icons/HoverableIcon';
import GitHubIcon from './icons/GitHubIcon';

import styled from 'styled-components';

const LeftSide = styled.div`
  display: flex;
  flex-grow: 0.1;
  justify-content: space-between;
`;

const RightSide = styled.div`
  display: flex;
  justify-content: space-between;
  flex-basis: 30%;
`;

const Footer = () => {
  return (
    <footer style={{ display: 'flex', justifyContent: 'space-between' }}>
      <LeftSide>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/talks'>Talks</Link>
      </LeftSide>
      <RightSide>
        <HoverableIcon aria-label='my twitter' href='https://twitter.com/mohamed3on'>
          <TwitterIcon size='48'></TwitterIcon>
        </HoverableIcon>
        <HoverableIcon aria-label='my LinkedIn' href='https://www.linkedin.com/in/mohamed3on'>
          <LinkedInIcon size='48'></LinkedInIcon>
        </HoverableIcon>
        <HoverableIcon aria-label='my GitHub' href='https://www.GitHub.com/mohamed3on'>
          <GitHubIcon size='48'></GitHubIcon>
        </HoverableIcon>
        <HoverableIcon aria-label='my Instagram' href='https://instagram.com/mohamed3on'>
          <InstagramIcon size='48'></InstagramIcon>
        </HoverableIcon>
      </RightSide>
    </footer>
  );
};

export default Footer;
