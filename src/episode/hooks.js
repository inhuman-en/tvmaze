import { useSelector } from 'react-redux';

export const useEpisode = () => useSelector(state => state.selectedEpisode);