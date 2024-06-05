import React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';

import Layout from '../components/layout';
import SEO from '../components/seo';

class AboutPage extends React.Component {
  render() {
    const { data } = this.props;

    const siteTitle = data.site.siteMetadata.title;

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title='About' />
        <GatsbyImage image={data.avatar.childImageSharp.gatsbyImageData} />
        <h3>Descriping yourself is hard</h3>
        <p>
          I will try anyway. I'm a software engineer, originally from Egypt, who loves crowdsourced
          stuff. I use Reddit religiously, and I know almost all crowdsourcing platforms.
        </p>
        <p>
          I'm also a maker, I made <a href='https://tribefinder.app'>Tribe Finder</a>, an app that
          shows you where your twitter friends live, and <a href='https://topcasts.app'>Topcasts</a>
          , an app that shows you the top podcast episodes and helps you track your favourite ones.
        </p>
        <p>
          I created this blog to write my thoughts on various topics, but mostly regarding tech. It
          has not been going well so far, but maybe one day.
        </p>
        <p>I'm currently based in Berlin.</p>
        <p>
          For more info, Feel free to <a href='mailto:mohamed3on@gmail.com'>get in touch</a>!
        </p>
      </Layout>
    );
  }
}

export default AboutPage;

export const pageQuery = graphql`
  {
    avatar: file(absolutePath: { regex: "/hf-pic.jpg/" }) {
      childImageSharp {
        gatsbyImageData(quality: 100, layout: FULL_WIDTH)
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`;
