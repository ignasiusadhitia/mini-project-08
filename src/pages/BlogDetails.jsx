import React from 'react';

import { useParams } from 'react-router-dom';

import usePosts from '@hooks/usePosts';

import { NewsletterSection, PostList } from '@components';

const post = {
  date: 'Sunday, 1 Jan 2023',
  title: 'Grid system for better Design User Interface',
};

const BlogDetails = () => {
  const { '*': key } = useParams();

  const { data: recentPosts, isLoading, error } = usePosts('/games');
  const {
    data: post,
    isLoading: postIsLoading,
    error: postError,
  } = usePosts(`/detail/${key}`);

  if (isLoading || postIsLoading) {
    return <div>Loading...</div>;
  }
  if (error || postError) {
    return <div>Error: {error?.message || 'Try again later'}</div>;
  }

  const { author, categories, content, date, title } = post.results;

  return (
    <div className="container p-8 flex flex-col-reverse md:flex-row gap-8">
      {/* Post List */}
      <aside className="w-full md:w-85.5">
        <PostList posts={recentPosts} />
      </aside>
      <main className="flex flex-col gap-8">
        <article className="mb-12">
          <time>{date}</time>
          <h1>{title}</h1>
        </article>
        <section>
          <NewsletterSection />
        </section>
      </main>
    </div>
  );
};

export default BlogDetails;
