import React from 'react';

// Import typefaces
import 'typeface-montserrat';
import 'typeface-merriweather';
import 'typeface-slabo-27px';
import profilePic from './profile-pic.jpg';
import { rhythm } from '../utils/typography';

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(2.5)
        }}
      >
        <img
          src={profilePic}
          alt={`Mohamed Oun`}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
            borderRadius: 40
          }}
        />
        <p>
          Written by <strong>Mohamed Oun</strong>, an Egyptian web developer in
          Berlin who likes programming, football and food. This blog will be
          mostly about programming though (sorry).{' '}
          <a href="https://twitter.com/Mohamed3on">
            You should follow him on Twitter, btw!
          </a>
        </p>
      </div>
    );
  }
}

export default Bio;
