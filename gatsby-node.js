const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  return graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            id
            fields {
              slug
              collection
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: `/souvenirs${node.fields.slug}`,
        component: path.resolve(
          `src/templates/${String(node.fields.collection)}Template.js`
        ),
        context: {
          id: node.id,
        },
      })
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const parent = getNode(node.parent)
    createNodeField({
      node,
      name: 'collection',
      value: parent.sourceInstanceName,
    })

    const slug = createFilePath({ node, getNode })
    createNodeField({
      node,
      name: 'slug',
      value: slug,
    })

    const timestamp = Date.parse(node.frontmatter.date)
    createNodeField({
      node,
      name: 'timestamp',
      value: timestamp,
    })
  }
}
