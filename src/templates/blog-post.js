import React from 'react';
import { graphql, Link } from 'gatsby';
import styled from 'styled-components'

import Layout from '../components/layout';

import './blog-post.css'

const HomeLink = styled(Link)`
  text-decoration: none;
  color: #f6eec9;
  background-color: #799351;
  padding: 10px 15px;
  border-radius: 10px;
  box-shadow: 2px 3px 4px #ffa36c;
  transition: all 0.3s ease-in-out;

  ${Link}:hover {
    color: #fffbe8;
    background-color: #6f854e;
    box-shadow: 2px 3px 2px #a20a0a;
  }
`

export default ({ data }) => {
    const post = data.markdownRemark;
    return (
        <Layout>
            <div>
                <h1>{post.frontmatter.title}</h1>
                <div 
                    dangerouslySetInnerHTML={{ __html: post.html }} 
                    style={{ textAlign: `justify` }}
                />
            </div>
            <HomeLink to="/">Back to Homepage</HomeLink>
        </Layout>
    )
}

export const query = graphql`
    query($slug: String!) {
        markdownRemark( fields: { slug: { eq: $slug }}) {
            html
            frontmatter {
                title
            }
        }
    }
`