import React from 'react';
import { PageContainer } from '../components/page-container';
import { MainContent } from '../components/main-content';
import { TableOfContents } from '../components/table-of-content';

const IndexPage = () => (
  <PageContainer>
    <MainContent>
      <h1>Web Developer Toolbox</h1>
      <p>Learn the tools that will make you productive as a Web Developer.</p>
    </MainContent>
    <TableOfContents />
  </PageContainer>
);

export default IndexPage;
