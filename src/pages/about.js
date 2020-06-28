import React from 'react';
import { graphql } from 'gatsby';
import Image from 'gatsby-image';

import Layout from '../components/layout';
import SEO from '../components/seo';

class AboutPage extends React.Component {
  render() {
    const { data } = this.props;

    const siteTitle = data.site.siteMetadata.title;

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title='About' />
        <Image fluid={data.avatar.childImageSharp.fluid} />
        <h3>Descriping yourself is hard</h3>
        <p>
          I will try anyway. I'm a software engineer whose interests range from technology, to
          football, to economics and psychology.
        </p>
        <p>
          I created this blog to write my thoughts on various topics, but mostly regarding tech.
        </p>
        <p>I'm currently based in Berlin, working as a front-end engineer at HelloFresh.</p>
        <p>
          For more info, Feel free to <a href='mailto:mohamed3on@gmail.com'>get in touch</a>!
        </p>
      </Layout>
    );
  }
}

export default AboutPage;

export const pageQuery = graphql`
  query {
    avatar: file(absolutePath: { regex: "/hf-pic.jpg/" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`;
