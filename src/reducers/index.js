import { combineReducers } from 'redux';
import videosReducer from './videos_reducer';

const rootReducer = combineReducers({
  video: videosReducer
});

export default rootReducer;
