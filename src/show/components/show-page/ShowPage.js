import React from 'react';
import { useParams } from 'react-router-dom';
import './ShowPage.scss';

const ShowPage = () => {

  const params = useParams();
  console.log(params);

return <div>show page for {params.id}</div>;
}

export default ShowPage;
