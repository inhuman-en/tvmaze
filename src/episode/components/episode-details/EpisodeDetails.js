import React, {  } from 'react';
import SanitizedHTML from 'react-sanitized-html';
import './EpisodeDetails.scss';

const EpisodeDetails = ({ data }) => {
  return <div>
    <div>
    <SanitizedHTML html={data.summary} />
    </div>
    {data.image && <a href={data.image.original} rel="noreferrer" target="_blank">
      <img src={data.image.medium} alt={data.name} title={data.name} />
    </a>}
    </div>
};

export default EpisodeDetails;
