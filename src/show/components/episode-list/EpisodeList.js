import React from 'react';
import { Link } from 'react-router-dom';

const renderEpisodeItem = (episode) => (
  <div key={episode.id}>
    {episode.season}x{episode.number} - <Link to={`/episode/${episode.id}`}>{episode.name}</Link>
  </div>
);

const EpisodeList = ({ data }) => <div>{data.map(renderEpisodeItem)}</div>;

export default EpisodeList;
