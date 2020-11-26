import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import './EpisodePage.scss';

import { ErrorMessage, Spinner } from 'shared';

import { loadEpisodeDetails } from '../../store';
import { useEpisode } from '../../hooks';

import EpisodeDetails from '../episode-details/EpisodeDetails';

const EpisodePage = () => {
  const { id } = useParams();
  const { data, error } = useEpisode();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadEpisodeDetails(id));
  }, [id, dispatch]);

  if (error) {
    return <ErrorMessage text={error} />;
  }

  if (!data) {
    return <Spinner />;
  }

  return <EpisodeDetails data={data} />;
};

export default EpisodePage;
