import { joinClassName } from 'join-string';
import { graphql, Link, StaticQuery } from 'gatsby';
import React from 'react';
import './table-of-content.scss';

const isActive = ({ isCurrent }) =>
  isCurrent ? { className: 'toc-link toc-link--active' } : null;

export const TableOfContents = ({ fixed }) => (
  <StaticQuery
    query={graphql`
      query {
        lessons: allMarkdownRemark(
          sort: { fields: fileAbsolutePath, order: ASC }
          filter: { frontmatter: { path: { ne: "/" } } }
        ) {
          edges {
            node {
              frontmatter {
                title
                path
              }
            }
          }
        }
      }
    `}
    render={data => (
      <nav
        className={joinClassName(
          'table-of-content',
          fixed && 'table-of-content--fixed'
        )}
      >
        <div className="table-of-content-container">
          <ol>
            {data.lessons.edges
              .map(edge => edge.node.frontmatter)
              .map(({ path, title }) => (
                <li key={path}>
                  <Link className="toc-link" getProps={isActive} to={path}>
                    {title}
                  </Link>
                </li>
              ))}
          </ol>
        </div>
      </nav>
    )}
  />
);
