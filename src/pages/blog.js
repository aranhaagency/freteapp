import React from "react"
import Helmet from "react-helmet"
import { Link, graphql } from "gatsby"

import Layout from "../layouts/index.js"
import typography from "../utils/typography"


const rhythm = typography.rhythm

class BlogIndexRoute extends React.Component {
  render() {
    const posts = this.props.data.allMarkdownRemark.edges
    const siteTitle = this.props.data.site.siteMetadata.title

    return (
      <Layout location={this.props.location}>
        <Helmet title={siteTitle} />
        <p
          css={{
            marginBottom: rhythm(1.5),
          }}
        >
         
          Blog written by{" "}
          <strong>{this.props.data.site.siteMetadata.author}</strong>{" "}
          <a href="">
            blog at gatsbyjs.org
          </a>{" "}
          for my work on Gatsby
        </p>
        <p />
        <ul
          css={{
            marginBottom: 0,
          }}
        >
          {posts.map(post => (
            <li key={post.node.fields.slug}>
              <Link
                css={{
                  textDecoration: "none",
                }}
                to={post.node.fields.slug}
              >
                {post.node.frontmatter.title}
              </Link>
            </li>
          ))}
        </ul>
      </Layout>
    )
  }
}

export default BlogIndexRoute

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
        author
        homeCity
      }
    }
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { draft: { ne: true } } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`
