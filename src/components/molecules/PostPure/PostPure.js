import React from 'react';
import ImageBlockPure from '../ImageBlockPure/ImageBlockPure';
import styles from './post.module.scss';
import Link from 'gatsby-link';

const Post = ({ image, category, title, className, slug, children, buttons }) =>
  <ImageBlockPure className={className} image={image}>
    <div className={styles.content}>
      <div className={styles.header}>
        <div className={styles.category}>{category}</div>
        <h3><Link to={slug}>{title}</Link></h3>
      </div>
      {children}
    </div>
    {buttons}
  </ImageBlockPure>

export default Post
