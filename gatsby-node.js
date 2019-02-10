const path = require('path');

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  const lessonTemplate = path.resolve(
    __dirname,
    'src',
    'templates',
    'lesson-template.jsx'
  );

  return new Promise((fulfill, reject) => {
    return graphql(`
      {
        allMarkdownRemark(
          sort: { fields: fileAbsolutePath, order: ASC }
          filter: { frontmatter: { path: { ne: "/" } } }
        ) {
          edges {
            node {
              frontmatter {
                title
                path
              }
              html
            }
          }
        }
      }
    `)
      .then(result => {
        if (result.errors) {
          return reject(result.errors);
        }

        const instructions = result.data.allMarkdownRemark.edges;

        instructions.forEach(instruction => {
          createPage({
            path: instruction.node.frontmatter.path,
            component: lessonTemplate
          });
        });

        fulfill();
      })
      .catch(reject);
  });
};
