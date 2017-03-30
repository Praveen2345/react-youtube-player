import _ from 'lodash';
import React, { Component } from 'react';


import YTSearch  from 'youtube-api-search';
import SearchBar from './search_bar';
import VideoList from './video_list';
import VideoDetail from './video_detail';

const API_KEY = 'AIzaSyC-NY20FSzD3ujPWbx3xe5y4tUHH6k9ZyQ';



export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null
    };
  }

  videoSearch(term) {

      YTSearch({key: API_KEY, term: term }, (videos) => {
          this.setState({
              videos: videos,
              selectedVideo: videos[0]
          })
      });
  }
    // we need to pass the videos to the video list component
  render() {
    const videoSearch = _.debounce(term => this.videoSearch(term), 300);
    return (
      <div>
        <SearchBar  onSearchTermChange={videoSearch} />
        <VideoList
            onVideoSelect={selectedVideo => this.setState({selectedVideo})}
            videos={this.state.videos}/>
        <VideoDetail video={this.state.selectedVideo} />
      </div>
    );
  }
}
