import YTSearch from 'youtube-api-search';

const API_KEY = "AIzaSyB_KbAH1LRr7mBoaR2-QYc-ngx4dGN8nnk";

export const FETCH_VIDEOS = 'FETCH_VIDEOS';

export function fetchVideos(term){
  const request = YTSearch({key: API_KEY, term: term});

  return {
    type: FETCH_VIDEOS,
    payload: request
  };
}
