import React, {  } from 'react';
import { Link } from 'react-router-dom';

const EpisodeList = ({ data }) => {
  return <div>
    {data.map(episode => <div key={episode.id}>{episode.season}x{episode.number} - <Link to={`/episode/${episode.id}`}>{episode.name}</Link></div>)}
  </div>
};

export default EpisodeList;
