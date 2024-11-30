import React from 'react';

import { PostList } from '@components';

const post = {
  date: 'Sunday, 1 Jan 2023',
  title: 'Grid system for better Design User Interface',
};

const BlogDetails = () => {
  return (
    <div className="container p-8 flex flex-col-reverse md:flex-row gap-8">
      {/* Post List */}
      <aside className="w-full md:w-85.5">
        <PostList />
      </aside>
      <main className="flex flex-col gap-8">
        <article className="mb-12">
          <time>{post.date}</time>
          <h1>{post.title}</h1>
        </article>
        <section></section>
      </main>
    </div>
  );
};

export default BlogDetails;
