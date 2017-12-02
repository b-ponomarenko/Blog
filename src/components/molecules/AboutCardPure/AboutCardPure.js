import React from 'react';
import ImageBlockPure from '../ImageBlockPure/ImageBlockPure';
import styles from './about-card.module.scss';
import image from '../../../assets/images/me.jpeg';
import declOfNum from '../../../declOfNum';

const birthday = new Date('1995-07-06');
const years = Math.floor((Date.now() - birthday) / 1000 / 60 / 60 / 24 / 365);
const yearsWord = declOfNum(years, ['год', 'года', 'лет']);

const AboutCardPure = () =>
  <ImageBlockPure className={styles.card} image="http://demo.shapedtheme.com/kotha-pro-html/assets/images/about-me-bg.jpg">
    <div className={styles.content}>
      <h4 className={`text-center ${styles.fullName}`}>Богдан Пономаренко</h4>
      <p className={`${styles.text} text-center`}>
        Привет! Меня зовут Богдан, мне {years} {yearsWord} и&nbsp;я&nbsp;frontend разработчик. В&nbsp;этом блоге я&nbsp;пишу об&nbsp;технологиях и&nbsp;жизни.
      </p>
    </div>
    <img className={styles.me} src={image} />
  </ImageBlockPure>

export default AboutCardPure
