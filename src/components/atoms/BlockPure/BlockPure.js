import React from 'react';
import styles from './block.module.scss';
import classNames from 'classnames';
import { bool, func } from 'prop-types';

const Block = ({ withSpacing, children, className }) =>
  <div className={classNames({
    [styles.block]: true,
    [styles.spacings]: withSpacing,
    [className]: true
  })}>
    {children}
  </div>

Block.propTypes = {
  withSpacing: bool,
  children: func
};

Block.defaultProps = {
  withSpacing: false
};

export default Block