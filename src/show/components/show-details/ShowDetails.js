import React from 'react';
import PropTypes from 'prop-types';
import SanitizedHTML from 'react-sanitized-html';
import './ShowDetails.scss';

const ShowDetails = ({ data }) => {
  return (
    <div className="show-details">
      <div className="show-details__title">{data.name}</div>
      <div className="show-details__main">
        <a className="show-details__main__poster" href={data.image.original} rel="noreferrer" target="_blank">
          <img src={data.image.medium} alt={data.name} title={data.name} />
        </a>
        {/* NOTE: allowed tags are exemplary and could be different based on content returned */}
        <div className="show-details__main__description">
          <SanitizedHTML html={data.summary} allowedTags={['p', 'b']} />
        </div>
      </div>
    </div>
  );
};

ShowDetails.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    summary: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    image: PropTypes.shape({
      original: PropTypes.string,
      medium: PropTypes.string,
    }).isRequired,
  }),
};

export default ShowDetails;
