import React from "react"
import { graphql, Link } from "gatsby"
import styled from 'styled-components'

import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogLink = styled(Link)`
  text-decoration: none;
  color: black;
`
const BlogPost = styled.div`
  padding: 1px 10px;
  padding-top: 10px;
  margin-bottom: 20px;
  border: 1px dashed #799351;
  transition: all 1s ease;

  ${Link}:hover {
    padding: 1px 10px;
    padding-top: 10px;
    margin-bottom: 20px;
    border: 1px solid #799351;
    background-color: rgba(121, 147, 81, 0.3);
  }
`
const BlogTitle = styled.h3`
  margin-bottom: 20px;
  color: #799351;
`

export default ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <div>
      <h1>My way to becoming a Fullstack Developer</h1>
      <h4>{ data.allMarkdownRemark.totalCount } Posts</h4>
      {data.allMarkdownRemark.edges.map(({node}) => (
        <BlogPost key={node.id}>
          <BlogLink to={node.fields.slug}>
            <BlogTitle>
              {node.frontmatter.title} - {node.frontmatter.date}
            </BlogTitle>
            <p>{ node.excerpt }</p>
          </BlogLink>
        </BlogPost>
      ))}
    </div>
  </Layout>
)

export const query = graphql`
query {
  allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
    totalCount
    edges {
      node {
        id
        frontmatter {
          description
          title
          date
        }
        fields {
          slug
        }
        excerpt
      }
    }
  }
}

`