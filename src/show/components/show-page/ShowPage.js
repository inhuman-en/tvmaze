import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import './ShowPage.scss';

import { loadShowDetails } from '../../store';

import ShowDetails from '../show-details/ShowDetails';

const ShowPage = () => {
  const { id } = useParams();
  const {details, error } = useSelector(state => state.show);
  const dispatch = useDispatch();

  useEffect(
    () => dispatch(loadShowDetails(id)),
    [id, dispatch],
  );

  if (error) {
    return error;
  }

  if (!details) {
    return <div>Loading...</div>
  }

  return <ShowDetails data={details} />;
};

export default ShowPage;
