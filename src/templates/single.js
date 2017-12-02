import React from "react"
import SinglePagePure from '../components/organisms/SinglePagePure/SinglePagePure';

export default ({ data }) => <SinglePagePure data={data}/>

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
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
      html
    }
  }
`