import { combineReducers } from 'redux';
import VideosReducer from './videos';

const rootReducer = combineReducers({
  videos: VideosReducer
});

export default rootReducer;
