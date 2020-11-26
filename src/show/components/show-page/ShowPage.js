import React, { Fragment, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import './ShowPage.scss';

import { ErrorMessage, Spinner } from 'shared';

import { loadShowDetails, loadEpisodeList } from '../../store';
import { useShow, useShowNavigation } from '../../hooks';

import ShowDetails from '../show-details/ShowDetails';
import EpisodeList from '../episode-list/EpisodeList';

const renderShowNavigation = (prevPath, nextPath) => (
  <div>
    <Link to={prevPath}>Prev</Link>
    <Link to={nextPath}>Next</Link>
  </div>
);

const renderDetails = (error, isLoading, detailsData, episodeListData) => {
  if (error) {
    return <ErrorMessage text={error} />;
  }

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <Fragment>
      <ShowDetails data={detailsData} />
      <EpisodeList data={episodeListData} />
    </Fragment>
  );
};

const ShowPage = () => {
  const { id } = useParams();
  const [prevPath, nextPath] = useShowNavigation();
  const { detailsData, episodeListData, error, isLoading } = useShow();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadShowDetails(id));
    dispatch(loadEpisodeList(id));
  }, [id, dispatch]);

  return (
    <Fragment>
      {renderShowNavigation(prevPath, nextPath)}
      {renderDetails(error, isLoading, detailsData, episodeListData)}
    </Fragment>
  );
};

export default ShowPage;
