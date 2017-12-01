import React from 'react'
import Link from 'gatsby-link'
import styles from './index.module.scss';
import { Grid, Col, Row } from 'react-flexbox-grid';

console.log(styles);

const IndexPage = ({ data }) => (
    <div className={styles.card}>
      <Grid fluid>
        <Row>
          <Col xs={6} md={3}>
            {data.site.siteMetadata.title}
          </Col>
          <Col xs={6} md={3}>
            Hello, world!
          </Col>
        </Row>
      </Grid>
    </div>
)

export const query = graphql`
  query AboutQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`

export default IndexPage
