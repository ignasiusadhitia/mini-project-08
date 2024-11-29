import React from 'react';

import { Link } from 'react-router-dom';

import { ArrowLink } from '@icons';
import { articleImg } from '@images';

const article = {
  image: articleImg,
  author: 'Olivia Rhye',
  date: '1 Jan 2023',
  title: 'UX review presentations',
  description:
    'How do you create compelling presentations that wow your colleagues and impress your managers?',
  categories: ['Design', 'Research', 'Presentation'],
  key: 'ux-review-presentations',
};

const PostCard = () => {
  return (
    <Link to={`/blog/${article.key}`}>
      <article className="container flex flex-col gap-8">
        {/* Article image */}
        <img alt="" className="w-full" src={article.image} />

        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            {/* Article info */}
            <div className="text-purple font-semibold text-sm">
              <span>{article.author}</span>
              <span> • </span>
              <time dateTime="">{article.date}</time>
            </div>

            {/* Article title */}
            <div className="flex justify-between items-center">
              <h3 className="text-black-2 text-2xl font-semibold">
                {article.title}
              </h3>
              <ArrowLink />
            </div>

            {/* Article categories */}
            <p className="text-gray-1 text-base">{article.description}</p>
          </div>

          {/* Article categories */}
          <div></div>
        </div>
      </article>
    </Link>
  );
};

export default PostCard;
