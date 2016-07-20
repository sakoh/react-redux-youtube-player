import { combineReducers } from 'redux';
import videosReducer from './videosReducer';

const rootReducer = combineReducers({
  videos: videosReducer
});

export default rootReducer;
