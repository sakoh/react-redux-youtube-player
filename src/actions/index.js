import YTSearch from 'youtube-api-search';
import { SEARCH_VIDEOS, SELECT_VIDEO } from './types';

const API_KEY = "AIzaSyAOCM2eRhEOZUSJamIDZ5NNK03P9k3Zl_4";

export const searchVideos = (term) => (dispatch) => {
  YTSearch({ key: API_KEY, term }, (videos) => {

    const payload = {
      videos,
      selectedVideo: videos[0]
    };

    dispatch({ type: SEARCH_VIDEOS, payload });
  });
}

export function selectVideo(video) {
  return { type: SELECT_VIDEO, payload: video };
}
