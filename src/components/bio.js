import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';

import { rhythm } from '../utils/typography';

function Bio() {
  return (
    <StaticQuery
      query={bioQuery}
      render={(data) => {
        const { author, social } = data.site.siteMetadata;
        return (
          <div
            style={{
              display: `flex`,
            }}
          >
            <GatsbyImage
              image={data.avatar.childImageSharp.gatsbyImageData}
              alt={author}
              style={{
                marginRight: rhythm(1 / 2),
                marginBottom: 0,
                minWidth: 100,
                borderRadius: `100%`,
              }}
              imgStyle={{
                borderRadius: `50%`,
              }}
            />
            <p>
              Written by <strong>{author}</strong>, maker of{' '}
              <a href='https://topcasts.app'>Topcasts</a> and{' '}
              <a href='https://tribefinder.app'>Tribe Finder</a>.<br></br>
              You can follow him on <a href={`https://twitter.com/${social.twitter}`}> Twitter</a>.
            </p>
          </div>
        );
      }}
    />
  );
}

const bioQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/profile.jpg/" }) {
      childImageSharp {
        gatsbyImageData(width: 100, height: 100, quality: 100, layout: FIXED)
      }
    }
    site {
      siteMetadata {
        author
        social {
          twitter
        }
      }
    }
  }
`;

export default Bio;
