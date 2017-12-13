import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import Header from '../components/organisms/Header/Header';
import 'prismjs/themes/prism-okaidia.css';
import '../assets/scss/index.scss';

const TemplateWrapper = ({ children }) => (
  <div style={ {minHeight: '100vh'} }>
    <Helmet
      title="Gatsby Default Starter"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header />
    {children()}
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
