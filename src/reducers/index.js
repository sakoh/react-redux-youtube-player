import { combineReducers } from 'redux';
import videosReducer from './videosReducer';

const rootReducer = combineReducers({
  video: videosReducer
});

export default rootReducer;
