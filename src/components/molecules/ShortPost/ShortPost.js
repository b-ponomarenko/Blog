import React from 'react';
import Post from '../PostPure/PostPure';
import Button from '../../atoms/Button/Button';
import { navigateTo } from "gatsby-link";

const ShortPost = ({ ...props, slug, excerpt }) =>
  <Post
    {...props}
    buttons={
      <div className="text-center">
        <Button onClick={navigateTo.bind(null, slug)}>Continue</Button>
      </div>
    }
  >
    {excerpt}
  </Post>

export default ShortPost