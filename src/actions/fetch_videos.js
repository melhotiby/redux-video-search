import YTSearch from 'youtube-api-search';
import Promise from 'promise';

const API_KEY = "AIzaSyB_KbAH1LRr7mBoaR2-QYc-ngx4dGN8nnk";

export const FETCH_VIDEOS = 'FETCH_VIDEOS';

export function fetchVideos(term){
  let data = {};

  var promise = new Promise( (resolve, reject) => {
    YTSearch({key: API_KEY, term: term}, (videos) => {
      resolve(videos);
    });
  });

  return {
    type: FETCH_VIDEOS,
    payload: promise
  };
}
