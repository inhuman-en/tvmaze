import { useRouteMatch, useParams, generatePath } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const useShowNavigation = () => {
  const { path } = useRouteMatch();
  const { id } = useParams();
  const prevPath = generatePath(path, { id: +id - 1 });
  const nextPath = generatePath(path, { id: +id + 1 });

  return [prevPath, nextPath];
};

export const useShow = () => {
  const { detailsData, episodeListData, error, isLoading } = useSelector((state) => {
    const { data: detailsData, error: detailsError } = state.selectedShow.details;
    const { data: episodeListData, error: episodeListError } = state.selectedShow.episodeList;

    return {
      detailsData,
      episodeListData,
      error: detailsError || episodeListError,
      isLoading: !detailsData || !episodeListData,
    };
  });

  return { detailsData, episodeListData, error, isLoading };
};
