import React from 'react';
import { Link } from 'gatsby';
import TwitterIcon from './icons/TwitterIcon';
import LinkedInIcon from './icons/LinkedInIcon';
import InstagramIcon from './icons/InstagramIcon';

import HoverableIcon from './icons/HoverableIcon';
import GitHubIcon from './icons/GitHubIcon';

const Footer = () => {
  return (
    <footer style={{ display: 'flex', justifyContent: 'space-between' }}>
      <Link to='/about'>About</Link>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          flexBasis: '30%'
        }}
      >
        <HoverableIcon href='https://twitter.com/mohamed3on'>
          <TwitterIcon size='32'></TwitterIcon>
        </HoverableIcon>
        <HoverableIcon href='https://www.linkedin.com/in/mohamed3on'>
          <LinkedInIcon size='32'></LinkedInIcon>
        </HoverableIcon>
        <HoverableIcon href='https://www.GitHub.com/mohamed3on'>
          <GitHubIcon size='32'></GitHubIcon>
        </HoverableIcon>
        <HoverableIcon href='https://instagram.com/mohamed3on'>
          <InstagramIcon size='32'></InstagramIcon>
        </HoverableIcon>
      </div>
    </footer>
  );
};

export default Footer;
