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

const Talk = ({ slidesLink, title, details }) => (
  <li>
    <Bold>{title}: </Bold>
    {details}.<a href={slidesLink}> See slides.</a>
  </li>
);

class TalksPage extends React.Component {
  render() {
    const { data } = this.props;

    const siteTitle = data.site.siteMetadata.title;

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title='Talks' />
        <h1>Talks I've given</h1>
        <List>
          <Talk
            title='Effective front-end testing: how to confidently deploy on a Friday'
            slidesLink='https://speakerdeck.com/mohamed3on/effective-testing-how-to-confidently-deploy-on-a-friday'
            details='given at React Berlin meetup, 2019'></Talk>

          <Talk
            title='Optional Chaining operator'
            slidesLink='https://speakerdeck.com/mohamed3on/the-optional-chaining-operator'
            details='given at React Berlin meetup, 2018'></Talk>
          <Talk
            slidesLink='https://speakerdeck.com/mohamed3on/async-therefore-await'
            details='given at BerlinJS meetup, 2018'
            title='Async Therefore Await'></Talk>
        </List>
      </Layout>
    );
  }
}

export default TalksPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
