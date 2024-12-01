import React from 'react';

import PropTypes from 'prop-types';

import { PostCard } from '@components';

const PostList = ({ posts, display, gap = 'gap-8', showLabel }) => {
  return (
    <div className={`${display} ${gap} py-7.5 mt-0.5`}>
      {posts?.map((postData, index) => (
        <PostCard
          key={index}
          showIcon
          imageHeight="h-60"
          imageWidth="w-full"
          post={postData}
          showLabel={showLabel}
        />
      ))}
    </div>
  );
};

PostList.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object),
  display: PropTypes.string,
  gap: PropTypes.string,
  showLabel: PropTypes.bool,
};

export default PostList;
