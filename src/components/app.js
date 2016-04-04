import React from 'react';
import SearchBar from './search_bar';
import VideoList from './video_list';
import VideoDetail from './video_detail';
import { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchVideos } from '../actions/fetch_videos'
import _ from 'lodash';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = { term: 'code', selectedVideo: null };
    this.videoSearch = this.videoSearch.bind(this);
    this.props.fetchVideos(this.state.term);
  }

  videoSearch(term){
    this.setState({term: term });
    this.props.fetchVideos(term);
  }

  render() {
    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);

    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch}/>
          <VideoDetail video={this.state.selectedVideo} />
      </div>
    );
  }
}

function mapStateToProps({ videos }){
  return { videos };
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ fetchVideos }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
