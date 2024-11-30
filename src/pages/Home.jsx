import React from 'react';

import { PostCard, PostList } from '@components';

const Home = () => {
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
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-8 pb-7.5">
              <PostCard showIcon imageHeight="h-57" imageWidth="w-full" />
              <div className="grid grid-rows-2 gap-8">
                <PostCard
                  clampText
                  display="md:flex"
                  imageWidth="w-full md:w-80"
                />
                <PostCard
                  clampText
                  display="md:flex"
                  imageWidth="w-full md:w-80"
                />
              </div>
            </div>
            <PostCard
              showIcon
              display="lg:grid lg:grid-cols-2 lg:gap-8"
              imageHeight="h-50"
              imageWidth="w-full"
              margin="my-7.5"
            />
          </div>
        </section>

        {/* All blog posts */}
        <section className="py-7.5">
          <h2 className="text-2xl font-semibold  text-black-2">
            All blog posts
          </h2>

          {/* Post list */}
          <PostList display="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 " />
        </section>
      </main>
    </>
  );
};

export default Home;
