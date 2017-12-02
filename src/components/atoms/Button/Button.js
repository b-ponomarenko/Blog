import React from 'react';
import styles from './button.module.scss';
import classNames from 'classnames';

const Button = ({ type, children, onClick }) =>
  <button
    type="button"
    className={classNames({
      [styles.button]: true,
      [styles.type]: true
    })}
    onClick={onClick}
  >
    {children}
  </button>

export default Button;