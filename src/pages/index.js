import React from 'react'
import IndexPagePure from '../components/organisms/IndexPagePure/IndexPagePure';

const IndexPage = ({ data }) => (
    <IndexPagePure data={data} />
);

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            image
            category
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
