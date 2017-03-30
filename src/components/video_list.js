// since the list has nothing to do except displaying lets use functional component
import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {
    const videosLength = props.videos.length;

    const videoItems = props.videos.map((video) => {
       return (
           <VideoListItem
               onVideoSelect={ props.onVideoSelect }
               key={video.etag} video={video} />
       )
    });

    return (
              <ul className="col-md-4 list-group">
                  {videoItems}
              </ul>
    );
};

export default VideoList;