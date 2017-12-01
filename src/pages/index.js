import React from 'react'
import Link from 'gatsby-link'
import styles from './index.module.scss';
import { Grid, Col, Row } from 'react-flexbox-grid';

console.log(styles);

const IndexPage = ({ data }) => (
    <div className={styles.card}>
      <Grid fluid>
        <Row>
          <Col xs={6} md={10}>
            <div>
              <h1>
                Amazing Pandas Eating Things
              </h1>
              <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
              {data.allMarkdownRemark.edges.map(({ node }) => (
                <Link
                  to={node.fields.slug}
                  css={{ textDecoration: `none`, color: `inherit` }}
                >
                  <h3>
                    {node.frontmatter.title}{" "}
                    <span>— {node.frontmatter.date}</span>
                  </h3>
                  <p>
                    {node.excerpt}
                  </p>
                </Link>
              ))}
            </div>
          </Col>
        </Row>
      </Grid>
    </div>
)

export const query = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
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

export default IndexPage
