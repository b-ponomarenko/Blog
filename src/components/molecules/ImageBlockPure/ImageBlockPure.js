import React from 'react';
import Block from '../../atoms/BlockPure/BlockPure';
import styles from './image-block.module.scss';
import { string } from 'prop-types';

const ImageBlockPure = ({ children, image, className }) =>
  <Block className={className}>
    <div className={styles.image}>
      <img src={image} className={styles.image}/>
    </div>
    <div className={styles.spacing}>
      {children}
    </div>
  </Block>

ImageBlockPure.propTypes = {
  image: string
};

export default ImageBlockPure
