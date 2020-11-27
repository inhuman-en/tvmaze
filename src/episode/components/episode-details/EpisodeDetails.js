import React from 'react';
import SanitizedHTML from 'react-sanitized-html';
import { ErrorMessage } from 'shared';
import './EpisodeDetails.scss';

const renderImage = (data) =>
  data.image ? (
    <a className="episode-details__main__poster" href={data.image.original} rel="noreferrer" target="_blank">
      <img src={data.image.medium} alt={data.name} title={data.name} />
    </a>
  ) : (
    <div className="episode-details__main__noposter">
      <ErrorMessage text="No Image :(" />
    </div>
  );

const EpisodeDetails = ({ data }) => {
  return (
    <div className="episode-details">
      <div className="episode-details__title">{data.name}</div>
      <div className="episode-details__main">
        {renderImage(data)}
        <div className="episode-details__main__description">
          <SanitizedHTML html={data.summary || ''} allowedTags={['p', 'b']} />
        </div>
      </div>
    </div>
  );
};

export default EpisodeDetails;
