import React from 'react';
import SanitizedHTML from 'react-sanitized-html';
import './ShowDetails.scss';

const ShowDetails = ({ data }) => {
  return (
    <div>
      <div>
        {data.name}
      </div>
      <div>
        <SanitizedHTML html={data.summary} />
      </div>
      <a href={data.image.original} rel="noreferrer" target="_blank">
        <img src={data.image.medium} alt={data.name} title={data.name} />
      </a>
    </div>
  );
};

export default ShowDetails;
