import React from 'react';
import { Grid, Col, Row } from 'react-flexbox-grid';
import AboutCardPure from '../../molecules/AboutCardPure/AboutCardPure';
import PostPure from '../../molecules/PostPure/PostPure';
import styles from './index-page.module.scss';
import Container from '../../atoms/Container/Container';
import ApplicationPagePure from '../ApplicationPagePure/ApplicationPagePure';
import ShortPost from '../../molecules/ShortPost/ShortPost';

const IndexPagePure = ({ data: { allMarkdownRemark: { edges } } }) =>
  <ApplicationPagePure>
    {edges.map(({node}) =>
      <ShortPost
        className={styles.marginBottom}
        image={node.frontmatter.image}
        category={node.frontmatter.category}
        title={node.frontmatter.title}
        excerpt={node.excerpt}
        slug={node.fields.slug}
      />
    )}
  </ApplicationPagePure>

export default IndexPagePure