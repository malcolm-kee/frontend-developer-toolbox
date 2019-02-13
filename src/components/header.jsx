import { graphql, Link, StaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';
import './header.scss';

export const Header = ({ siteTitle, repoUrl }) => (
  <header className="header">
    <Link to="/" className="header-brand">
      <SharpImage className="icon" />
      {siteTitle}
    </Link>
    <a href={repoUrl} target="_blank" rel="noopener noreferrer">
      GitHub
    </a>
  </header>
);

const SharpImage = props => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "icon.png" }) {
          childImageSharp {
            fixed(width: 25, height: 25) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `}
    render={data => (
      <Img fixed={data.placeholderImage.childImageSharp.fixed} {...props} />
    )}
  />
);
