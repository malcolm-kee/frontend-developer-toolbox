import { Link } from 'gatsby';
import React from 'react';
import './header.scss';

export const Header = ({ siteTitle }) => (
  <header className="header">
    <Link to="/">{siteTitle}</Link>
  </header>
);
