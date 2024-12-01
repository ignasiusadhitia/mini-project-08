import parse from 'html-react-parser';
import { useParams } from 'react-router-dom';

import usePosts from '@hooks/usePosts';
import useTailwindifyContent from '@hooks/useTailwindifyContent';

import { NewsletterSection, PostList } from '@components';

const BlogDetails = () => {
  const { '*': key } = useParams();
  const { data: recentPosts, isLoading, error } = usePosts('/games');
  const {
    data: post,
    isLoading: postIsLoading,
    error: postError,
  } = usePosts(`/detail/${key}`);

  const processedContent = useTailwindifyContent(post?.results?.content);

  return (
    <div className="container p-8 flex flex-col-reverse lg:flex-row gap-8">
      {/* Post List */}
      <aside className="w-full lg:w-85.5 mt-8">
        {isLoading && <div>Loading...</div>}
        {error && <div>Error: {error.message || 'Try again Later'}</div>}
        {recentPosts && (
          <PostList
            display="flex flex-col md:grid md:grid-cols-2 lg:flex lg:flex-col"
            gap="gap-8 lg:gap-20"
            posts={recentPosts}
          />
        )}
      </aside>
      <main className="flex flex-col gap-8">
        {postIsLoading && <div>Loading...</div>}
        {postError && (
          <div>Error: {postError.message || 'Try again later'}</div>
        )}

        {post && (
          <article className="mb-12">
            <div className="flex flex-col gap-8">
              <time className="text-purple font-semibold text-sm">
                {post?.results?.date}
              </time>
              <h1 className="text-4xl text-black-2 font-bold">
                {post?.results?.title}
              </h1>

              <div className="flex flex-col gap-8 text-black-2 text-base">
                {parse(processedContent)}
              </div>
            </div>
          </article>
        )}

        <section>
          <NewsletterSection />
        </section>
      </main>
    </div>
  );
};

export default BlogDetails;
