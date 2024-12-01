import usePosts from '@hooks/usePosts';

import { PostCard, PostList } from '@components';

const Home = () => {
  const {
    data: recentPosts,
    isLoading: recentPostIsLoading,
    error: recentPostError,
  } = usePosts('/games?page=4');
  const {
    data: posts,
    isLoading: postsIsLoading,
    error: postsError,
  } = usePosts('/games/news');

  return (
    <>
      {/* Header */}
      <header className="md:container border-y-2 border-gray-4 my-7.5 ">
        <h1 className="text-display-mobile md:text-display-tablet lg:text-display-desktop font-bold text-center text-black-2">
          THE BLOG
        </h1>
      </header>

      {/* Main */}
      <main className="container px-8 lg:px-0">
        {/* Recent blog posts */}
        <section>
          <h2 className="text-2xl font-semibold  text-black-2">
            Recent blog posts
          </h2>

          {/* Post cards */}
          <div>
            {recentPostIsLoading && <div>Loading...</div>}
            {recentPostError && <div>Error: {recentPostError.message}</div>}
            {recentPosts && (
              <>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-8 pb-7.5">
                  <PostCard
                    showIcon
                    showLabel
                    data-cy="recent-post-card"
                    imageHeight="h-57"
                    imageWidth="w-full"
                    post={recentPosts?.[0]}
                  />
                  <div className="grid grid-rows-2 gap-8">
                    <PostCard
                      clampText
                      showLabel
                      display="md:flex"
                      imageWidth="w-full md:w-80"
                      post={recentPosts?.[1]}
                    />
                    <PostCard
                      clampText
                      showLabel
                      display="md:flex"
                      imageWidth="w-full md:w-80"
                      post={recentPosts?.[2]}
                    />
                  </div>
                </div>
                <PostCard
                  showIcon
                  showLabel
                  display="lg:grid lg:grid-cols-2 lg:gap-8"
                  imageHeight="h-50"
                  imageWidth="w-full"
                  margin="my-7.5"
                  post={recentPosts?.[3]}
                />
              </>
            )}
          </div>
        </section>

        {/* All blog posts */}
        <section className="py-7.5">
          <h2 className="text-2xl font-semibold  text-black-2">
            All blog posts
          </h2>

          {/* Post list */}
          {postsIsLoading && <div>Loading...</div>}
          {postsError && <div>Error: {postsError.message}</div>}
          {posts && (
            <PostList
              showLabel
              display="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 "
              posts={posts}
            />
          )}
        </section>
      </main>
    </>
  );
};

export default Home;
