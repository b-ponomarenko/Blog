import React from 'react';
import styles from './block.module.scss';
import classNames from 'classnames';
import { bool, func } from 'prop-types';

export default Block = ({ withSpacing, children }) =>
  <div className={classNames({
    [styles.block]: true,
    [styles.spacings]: withSpacing
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