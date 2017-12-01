import React from 'react';
import ImageBlockPure from '../ImageBlockPure/ImageBlockPure';

export default Post = ({ image, category, title, html }) =>
  <ImageBlockPure image={image}>
    <div className="content">
      <div className="category">{category}</div>
      <div className="title">{title}</div>
      <div className="html" dangerouslySetInnerHTML={{__html:html}} />
    </div>
  </ImageBlockPure>
