import React from 'react';
import { PageContainer } from '../components/page-container';
import { MainContent } from '../components/main-content';

const NotFoundPage = () => (
  <PageContainer>
    <MainContent>
      <h1>This page not exists.</h1>
      <p>the sadness...</p>
    </MainContent>
  </PageContainer>
);

export default NotFoundPage;
