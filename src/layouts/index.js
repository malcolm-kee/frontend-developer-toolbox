import { graphql, StaticQuery } from 'gatsby';
import React from 'react';
import { Helmet } from 'react-helmet';
import { Header } from '../components/header';
import { TableOfContents } from '../components/table-of-content';
import './page-container.scss';

const PageContainer = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteQuery {
        site {
          siteMetadata {
            title
            description
            author
            keywords
            repositoryUrl
          }
        }
      }
    `}
    render={data => (
      <div className="page-container">
        <Helmet>
          <title>{data.site.siteMetadata.title}</title>
          <meta name="author" content={data.site.siteMetadata.author} />
          <meta
            name="description"
            content={data.site.siteMetadata.description}
          />
          <meta
            name="keywords"
            content={data.site.siteMetadata.keywords.join()}
          />
        </Helmet>
        <Header
          siteTitle={data.site.siteMetadata.title}
          repoUrl={data.site.siteMetadata.repositoryUrl}
        />
        <div className="page-container-content">{children}</div>
        <TableOfContents fixed />
      </div>
    )}
  />
);

export default PageContainer;
