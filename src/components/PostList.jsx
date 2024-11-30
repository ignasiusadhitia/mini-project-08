import React from 'react';

import PropTypes from 'prop-types';

import { PostCard } from '@components';

const PostList = ({ display }) => {
  return (
    <div className={`${display} gap-8 py-7.5 mt-0.5`}>
      {Array.from({ length: 6 }).map((_, index) => (
        <PostCard key={index} showIcon imageHeight="h-60" imageWidth="w-full" />
      ))}
    </div>
  );
};

PostList.propTypes = {
  display: PropTypes.string,
};

export default PostList;
