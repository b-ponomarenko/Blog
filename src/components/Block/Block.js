import React from 'react';
import styles from 'block.module.scss';
import classNames from 'classnames'

export default Block = ({ withSpacing, children }) =>
  <div className={classNames({
    [styles.block]: true,
    [styles.spacings]: withSpacing
  })}>
    {children}
  </div>

Block.defaultProps = {
  withSpacing: false
};