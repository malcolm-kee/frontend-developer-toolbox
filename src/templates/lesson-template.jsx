import { graphql } from 'gatsby';
import React from 'react';
import { Helmet } from 'react-helmet';
import { PageContainer } from '../components/page-container';
import { MainContent } from '../components/main-content';
import { TableOfContents } from '../components/table-of-content';
import './lesson-template.scss';

const LessonTemplate = ({ data }) => (
  <PageContainer>
    <Helmet>
      <title>{data.markdownRemark.frontmatter.title}</title>
      {data.markdownRemark.frontmatter.description && (
        <meta
          name="description"
          content={data.markdownRemark.frontmatter.description}
        />
      )}
    </Helmet>
    <div className="lesson-template-content">
      <MainContent>
        <article
          dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
        />
      </MainContent>
    </div>
    <TableOfContents fixed />
  </PageContainer>
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
