import React from 'react';
import PropTypes from 'prop-types';

const InformationLayout = ({ status }) => {
  return <div className="info">{status}</div>;
};

InformationLayout.propTypes = {
  status: PropTypes.string.isRequired,
};

export default InformationLayout;
