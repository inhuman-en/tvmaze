import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import './EpisodePage.scss';

import { loadEpisodeDetails } from '../../store';

import EpisodeDetails from '../episode-details/EpisodeDetails';

const EpisodePage = () => {
  const { id } = useParams();
  const { data, error } = useSelector(state => state.selectedEpisode);
  const dispatch = useDispatch();

  useEffect(
    () => {
      dispatch(loadEpisodeDetails(id));
    },
    [id, dispatch],
  );

  if (error) {
    return error;
  }

  if (!data) {
    return <div>Loading...</div>
  }

  return <EpisodeDetails data={data} />;
};

export default EpisodePage;
