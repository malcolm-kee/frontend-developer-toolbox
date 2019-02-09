const path = require('path');

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((fulfill, reject) => {
    const lessonTemplate = path.resolve(
      __dirname,
      'src',
      'templates',
      'lesson-template.jsx'
    );

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

        instructions.forEach((instruction, index) => {
          const next =
            index === instructions.length - 1
              ? null
              : instructions[index + 1].node;
          const previous = index === 0 ? null : instructions[index - 1].node;

          createPage({
            path: instruction.node.frontmatter.path,
            component: lessonTemplate,
            context: {
              previous,
              next
            }
          });
        });

        fulfill();
      })
      .catch(reject);
  });
};
