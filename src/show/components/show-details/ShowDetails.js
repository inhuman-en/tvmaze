import React, {  } from 'react';
import { Link, useRouteMatch, useParams, generatePath } from 'react-router-dom';
import SanitizedHTML from 'react-sanitized-html';
import './ShowDetails.scss';

const ShowDetails = ({ data }) => {
  const { path } = useRouteMatch();
  const { id } = useParams();
  const prevPath = generatePath(path, { id: +id-1 });
  const nextPath = generatePath(path, { id: +id+1 });

return <div>
    <div>
      <Link to={prevPath}>Prev</Link>
      {data.name}
      <Link to={nextPath}>Next</Link>
    </div>
    <div>
    <SanitizedHTML html={data.summary} />
    </div>
    <a href={data.image.original} rel="noreferrer" target="_blank">
      <img src={data.image.medium} alt={data.name} title={data.name} />
    </a>
    </div>
};

export default ShowDetails;
