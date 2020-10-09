const path = require("path")

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const result = await graphql(`
    {
      pages: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/(content/pages)/" } }
      ) {
        edges {
          node {
            id
            frontmatter {
              slug
              template
              title
            }
          }
        }
      }
    }
  `)

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(
      `Error while running GraphQL query: ${JSON.stringify(
        result.errors,
        null,
        2
      )}`
    )
    return
  }

  // Create pages
  const pages = result.data.pages.edges

  pages.forEach(page => {
    const id = page.node.id

    createPage({
      path: page.node.frontmatter.slug,
      component: path.resolve(
        `src/templates/${String(page.node.frontmatter.template)}.js`
      ),
      context: {
        id,
      },
    })
  })
}