import { FETCH_VIDEOS } from '../actions/fetch_videos';

export default function(state = [], action){
  switch (action.type) {
  case FETCH_VIDEOS:
     return [ action.payload.data, ...state ];
  }
  return state;
}
