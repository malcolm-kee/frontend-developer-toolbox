import { graphql } from 'gatsby';
import React from 'react';
import { Helmet } from 'react-helmet';
import { MainContent } from '../components/main-content';

const LessonTemplate = ({ data }) => (
  <>
    <Helmet>
      <title>{data.markdownRemark.frontmatter.title}</title>
      {data.markdownRemark.frontmatter.description && (
        <meta
          name="description"
          content={data.markdownRemark.frontmatter.description}
        />
      )}
    </Helmet>
    <MainContent>
      <article dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
    </MainContent>
  </>
);

export default LessonTemplate;

export const pageQuery = graphql`
  query LessonByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        title
        description
      }
    }
  }
`;
