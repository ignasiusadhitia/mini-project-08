import React from 'react';

import { PostCard } from '@components';

const PostList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-7.5 mt-1">
      {Array.from({ length: 6 }).map((_, index) => (
        <PostCard key={index} showIcon imageHeight="h-60" imageWidth="w-full" />
      ))}
    </div>
  );
};

export default PostList;
