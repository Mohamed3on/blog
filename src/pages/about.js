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
          I will try anyway. I'm a software engineer whose interests range from technology, to
          football, to economics and psychology.
        </p>
        <p>
          I created this blog to write my thoughts on various topics, but mostly regarding tech.
        </p>
        <p>
          I'm currently based in Berlin, working as a front-end engineer at{' '}
          <a href='https://fast.co/'>Fast</a>.
        </p>
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
