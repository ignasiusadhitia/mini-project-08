import React from 'react';

import PropTypes from 'prop-types';

const PostLabel = ({ label, bgColor, labelColor }) => {
  return (
    <span
      className={`block text-sm py-0.5 px-2.5 rounded-2xl ${bgColor} ${labelColor}`}
    >
      {label}
    </span>
  );
};

PostLabel.propTypes = {
  label: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,
  labelColor: PropTypes.string.isRequired,
};

export default PostLabel;
