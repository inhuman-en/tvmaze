import { useRouteMatch, useParams, generatePath } from 'react-router-dom';
import { useSelector } from 'react-redux';

/**
 * hook for generating routes to previous and next shows
 * (by using neighbour ids)
 * @return {Array} paths
 * @property {String} paths[0] - route to previous show
 * @property {String} paths[1] - route to next show
 */
export const useShowNavigation = () => {
  const { path } = useRouteMatch();
  const { id } = useParams();
  const prevPath = generatePath(path, { id: +id - 1 });
  const nextPath = generatePath(path, { id: +id + 1 });

  return [prevPath, nextPath];
};

/**
 * hook for getting selected show data from the store
 * @return {Object} show
 * @property {Object} show.detailsData - show details
 * @property {Array} show.episodeListData - episode list
 * @property {String|null} show.error - error (present when data fetching failed)
 * @property {Boolean} show.isLoading - is fetching in progress
 */
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
