import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import styled from 'styled-components';

const List = styled.ul`
  list-style-position: inside;
`;

const Bold = styled.span`
  font-weight: bold;
`;

const Project = ({ link, title, details }) => (
  <li>
    <Bold>{title}: </Bold>
    {details}.<a href={link}> Check it out.</a>
  </li>
);

class ProjectsPage extends React.Component {
  render() {
    const { data } = this.props;

    const siteTitle = data.site.siteMetadata.title;

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title='Projects' />
        <h1>Side projects I've built</h1>
        <List>
          <Project
            title='Tribe Finder'
            link='https://tribefinder.app'
            details='Discover where your Twitter friends live'
          ></Project>
        </List>
      </Layout>
    );
  }
}

export default ProjectsPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
