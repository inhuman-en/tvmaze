import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { format as formatDate } from 'date-fns';
import './EpisodeList.scss';

const renderDate = (date) => formatDate(date, 'LLL d, y');

// NOTE: this list can be virtualized if beeded
const renderEpisodeItem = (episode) => (
  <tr key={episode.id} className="episode-list__row">
    <td>
      <span className="episode-list__row__number">
        {episode.season}x{episode.number}:
      </span>
    </td>
    <td>
      <Link to={`/episode/${episode.id}`} className="episode-list__row__episode-name">
        {episode.name}
      </Link>
    </td>
    <td className="episode-list__row__episode-date">{renderDate(new Date(episode.airdate))}</td>
  </tr>
);

const EpisodeList = ({ data }) => (
  <table className="episode-list">
    <thead className="episode-list__header">
      <tr className="episode-list__row">
        <th colSpan="2">Episode Name</th>
        <th>Airdate</th>
      </tr>
    </thead>
    <tbody className="episode-list__body">{data.map(renderEpisodeItem)}</tbody>
  </table>
);

EpisodeList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      season: PropTypes.number.isRequired,
      number: PropTypes.number.isRequired,
      id: PropTypes.number.isRequired,
      airdate: PropTypes.string.isRequired,
    }),
  ),
};

export default EpisodeList;
