import {
  SEARCH_VIDEOS,
  SELECT_VIDEO
} from '../actions/types';

export default function(state = {}, action) {
  switch(action.type) {
    case SEARCH_VIDEOS:
      return { ...state, selectedVideo: action.payload.selectedVideo, videos: action.payload.videos };
    case SELECT_VIDEO:
      return { ...state, selectedVideo: action.payload };
  }

  return state;
}
