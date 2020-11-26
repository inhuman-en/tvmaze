import { useSelector } from 'react-redux';

/**
 * hook for getting selected episode data from the store
 * @return {Object} episode
 */
export const useEpisode = () => useSelector(state => state.selectedEpisode);