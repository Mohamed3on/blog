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
  justify-content: space-between;
  flex-grow: 1;
  align-items: center;
  margin-bottom: 15px;
  @media (min-width: 768px) {
    flex-grow: 0.2;
    margin-bottom: 0;
  }
`;

const RightSide = styled.div`
  display: flex;
  justify-content: space-between;
  flex-basis: 35%;
`;

const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
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
    </StyledFooter>
  );
};

export default Footer;
