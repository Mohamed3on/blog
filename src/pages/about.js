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
        <SEO title="About" />
        <Image fluid={data.avatar.childImageSharp.fluid} />
        <h3>Descriping yourself is hard</h3>
        <p>
          I will try anyway. I'm just an average software engineer whose
          interests range from software development, to football, to music, to
          psychology, so basically everything.
        </p>
        <p>
          I made this blog to write my thoughts on random topics, but mostly
          regarding code. I'm not sure I'll ever actually do that, but let's
          see.
        </p>
        <p>
          I'm currently based in Berlin, working as a front-end engineer at
          HelloFresh.
        </p>
        <p>For more info, I'm always up for a cup of coffee.</p>
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
