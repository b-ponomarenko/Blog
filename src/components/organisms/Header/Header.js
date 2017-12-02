import React from 'react';
import Link from 'gatsby-link';
import styles from './header.module.scss';
import { Grid, Row, Col } from 'react-flexbox-grid';

const Header = () =>
  <div className={styles.header}>
    <Grid>
      <ul className={styles.navList}>
        <li>
          <Link to={'/'}>Home</Link>
        </li>
        <li>
          <Link to={'/about'}>About me</Link>
        </li>
        <li>
          <Link to={'/contact'}>Contact</Link>
        </li>
      </ul>
    </Grid>
  </div>

export default Header;