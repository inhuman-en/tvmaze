import React from 'react';
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
        <div className="show-details__main__description">
          <SanitizedHTML html={data.summary} 
  allowedTags={['p', 'b']}  />
        </div>
      </div>
    </div>
  );
};

export default ShowDetails;
