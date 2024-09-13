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

const Link = styled.a`
  color: #0066cc;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const createMarkup = (text, links) => {
  const parts = text.split(new RegExp(`(${Object.keys(links).join('|')})`, 'g'));
  return parts.map((part, index) =>
    links[part] ? (
      <Link key={index} href={links[part]}>
        {part}
      </Link>
    ) : (
      part
    )
  );
};

const Project = ({ link, title, details, specialLinks }) => (
  <li>
    <Link href={link}>
      <Bold>{title}: </Bold>
    </Link>
    {createMarkup(details, specialLinks)}
  </li>
);

const projects = [
  {
    title: 'NutriData',
    link: 'https://getnutridata.com',
    details: 'A tool to help you understand nutrition data of products on Rewe.de and Amazon.de',
    specialLinks: {
      'Rewe.de': 'https://www.rewe.de',
      'Amazon.de': 'https://www.amazon.de',
    },
  },
  {
    title: 'Tribe Finder',
    link: 'https://tribefinder.app',
    details: 'Discover where your Twitter friends live',
    specialLinks: {
      Twitter: 'https://twitter.com',
    },
  },
  {
    title: 'Topcasts',
    link: 'https://topcasts.app',
    details: 'Discover the top podcast episodes shared by people like you',
    specialLinks: {},
  },
];

const ProjectsPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title;

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title='Projects' />
      <h1>Side projects I've built</h1>
      <List>
        {projects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </List>
    </Layout>
  );
};

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
