import React from 'react';
import Block from '../Block/BlockPure';
import styles from './image-block.module.scss';
import { string } from 'prop-types';

export default Post = ({ children, image }) =>
  <Block>
    <div className={styles.image}>
      <img src={image}/>
    </div>
    {children}
  </Block>

Post.propTypes = {
  image: string
};
