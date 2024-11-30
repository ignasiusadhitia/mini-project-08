import React from 'react';

import PropTypes from 'prop-types';

const PostLabel = ({ label, bgColor, labelColor }) => {
  return (
    <span
      className={`text-sm py-0.5 px-2.5 rounded-2xl ${bgColor} ${labelColor} w-fit`}
    >
      {label}
    </span>
  );
};

PostLabel.propTypes = {
  label: PropTypes.string,
  bgColor: PropTypes.string,
  labelColor: PropTypes.string,
};

export default PostLabel;
