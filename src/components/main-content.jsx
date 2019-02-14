import React from 'react';
import './main-content.scss';

export const MainContent = ({ children }) => (
  <div className="main-content-container">
    <main className="main-content">{children}</main>
  </div>
);
