import { graphql, StaticQuery } from 'gatsby';
import React from 'react';
import { Helmet } from 'react-helmet';
import { Header } from './header';

export const PageContainer = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteQuery {
        site {
          siteMetadata {
            title
            description
            author
            keywords
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
        <Header siteTitle={data.site.siteMetadata.title} />
        {children}
      </div>
    )}
  />
);
