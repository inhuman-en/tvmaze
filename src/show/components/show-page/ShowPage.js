import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import './ShowPage.scss';

import { loadShowDetails, loadEpisodeList } from '../../store';

import ShowDetails from '../show-details/ShowDetails';
import EpisodeList from '../episode-list/EpisodeList';

const ShowPage = () => {
  const { id } = useParams();
  const { detailsData, episodeListData, error, isLoading } = useSelector(state => {
    const {
      data: detailsData,
      error: detailsError,
    } = state.selectedShow.details;
    const {
      data: episodeListData,
      error: episodeListError,
    } = state.selectedShow.episodeList;

    return {
      detailsData,
      episodeListData,
      error: detailsError || episodeListError,
      isLoading: !detailsData || !episodeListData,
    }
  });
  const dispatch = useDispatch();

  useEffect(
    () => {
      dispatch(loadShowDetails(id));
      dispatch(loadEpisodeList(id));
    },
    [id, dispatch],
  );

  if (error) {
    return error;
  }

  if (isLoading) {
    return <div>Loading...</div>
  }

  console.log(episodeListData);

  return <Fragment>
    <ShowDetails data={detailsData} />
    <EpisodeList data={episodeListData} />
    </Fragment>;
};

export default ShowPage;
