import { graphql, StaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';
import { PageContainer } from '../components/page-container';
import { MainContent } from '../components/main-content';
import { TableOfContents } from '../components/table-of-content';
import { IconAttribution } from '../components/icon-attribution';

const IndexPage = () => (
  <PageContainer>
    <MainContent>
      <h1>Web Developer Toolbox</h1>
      <SharpImage alt="Icon" className="icon--big" />
      <p style={{ textAlign: 'center' }}>
        Learn the tools that will make you productive as a Web Developer.
      </p>
    </MainContent>
    <TableOfContents />
    <IconAttribution />
  </PageContainer>
);

const SharpImage = props => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "icon.png" }) {
          childImageSharp {
            fluid(maxWidth: 150) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <Img fluid={data.placeholderImage.childImageSharp.fluid} {...props} />
    )}
  />
);

export default IndexPage;
