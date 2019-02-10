import { Link } from 'gatsby';
import React from 'react';
import './header.scss';

export const Header = ({ siteTitle, repoUrl }) => (
  <header className="header">
    <Link to="/">{siteTitle}</Link>
    <a href={repoUrl} target="_blank" rel="noopener noreferrer">
      GitHub
    </a>
  </header>
);
