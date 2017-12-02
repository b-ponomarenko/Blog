import React from 'react';
import ApplicationPagePure from '../ApplicationPagePure/ApplicationPagePure';
import FullPost from '../../molecules/FullPost/FullPost';

const SinglePagePure = ({ data: { markdownRemark: node } }) =>
  <ApplicationPagePure>
    <FullPost
      image={node.frontmatter.image}
      category={node.frontmatter.category}
      title={node.frontmatter.title}
      excerpt={node.excerpt}
      slug={node.fields.slug}
      html={node.html}
    />
  </ApplicationPagePure>



export default SinglePagePure