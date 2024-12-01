import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { PostLabel } from '@components';
import { ArrowLink } from '@icons';

const PostCard = ({
  margin,
  display,
  imageWidth,
  imageHeight,
  showIcon,
  showLabel,
  clampText,
  post,
}) => {
  return (
    <Link to={`/blog/${post?.key}`}>
      <article
        className={`container grid grid-col-1 gap-8 ${margin} ${display}`}
      >
        {/* Article image */}
        <img
          alt="post-image"
          className={`${imageWidth} ${imageHeight ? imageHeight : 'h-50'} object-cover`}
          src={post?.thumb}
        />

        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            {/* Article info */}
            <div className="text-purple font-semibold text-sm">
              <span>{post?.author}</span>
              <span> • </span>
              <time>{post?.time}</time>
            </div>

            {/* Article title */}
            <div className="flex justify-between gap-8">
              <h3 className="text-black-2 text-2xl font-semibold line-clamp-2">
                {post?.title}
              </h3>
              <div>{showIcon && <ArrowLink />}</div>
            </div>

            {/* Article categories */}
            <p
              className={`text-gray-1 text-base ${clampText ? 'line-clamp-2' : 'line-clamp-3'}`}
            >
              {post?.desc.substring(0, 250)}...
            </p>
          </div>

          {/* Article categories */}
          {showLabel && (
            <PostLabel
              bgColor="bg-soft-pink-1"
              label={post?.tag}
              labelColor="text-pink"
            />
          )}
        </div>
      </article>
    </Link>
  );
};

PostCard.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string,
    thumb: PropTypes.string,
    author: PropTypes.string,
    tag: PropTypes.string,
    time: PropTypes.string,
    desc: PropTypes.string,
    key: PropTypes.string,
  }),
  margin: PropTypes.string,
  showIcon: PropTypes.bool,
  showLabel: PropTypes.bool,
  imageWidth: PropTypes.string,
  imageHeight: PropTypes.string,
  display: PropTypes.string,
  clampText: PropTypes.bool,
};

export default PostCard;
