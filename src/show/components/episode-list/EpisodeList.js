import React from 'react';
import { Link } from 'react-router-dom';
import { format as formatDate } from 'date-fns';
import './EpisodeList.scss';

const renderDate = date => formatDate(date, 'LLL d, y');

const renderEpisodeItem = (episode) => (
  <tr key={episode.id} className="episode-list__row">
    <td>
      <span className="episode-list__row__number">
        {episode.season}x{episode.number}:
      </span>
      <Link to={`/episode/${episode.id}`} className="episode-list__row__episode-name">{episode.name}</Link>
    </td>
    <td>{renderDate(new Date(episode.airdate))}</td>
  </tr>
);

const EpisodeList = ({ data }) => (
  <table className="episode-list">
    <thead className="episode-list__header">
      <tr className="episode-list__row">
        <th>Episode Name</th>
        <th>Airdate</th>
      </tr>
    </thead>
    <tbody className="episode-list__body">{data.map(renderEpisodeItem)}</tbody>
  </table>
);

export default EpisodeList;
