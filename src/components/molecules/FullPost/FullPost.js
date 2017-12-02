import React from 'react';
import Post from '../PostPure/PostPure';

const FullPost = ({ ...props, html }) =>
  <Post
    {...props}
  >
    <div dangerouslySetInnerHTML={{__html: html }}></div>
  </Post>

export default FullPost