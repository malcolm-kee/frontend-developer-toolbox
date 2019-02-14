import { graphql, StaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';
import { IconAttribution } from '../components/icon-attribution';
import { MainContent } from '../components/main-content';

const IndexPage = () => (
  <MainContent>
    <h1>Web Developer Toolbox</h1>
    <SharpImage alt="Icon" className="icon--big" />
    <p style={{ textAlign: 'center' }}>
      Learn the tools that will make you productive as a Web Developer.
    </p>
    <IconAttribution />
  </MainContent>
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
