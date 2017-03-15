//plain functional component, that doesnt need states

import React from 'react';
import VideoListItem from './video_list_item';

//css class apply via className, due class may produce naming conflicts with keyword class
//props that we applyiedto <VideoList /> in index.js App is here an arg <props> of this function
const VideoList = (props) => {

  //key is needed, or it will create console log error //
  //each element in the array needs an index so react can react fast ;-) and doesnt need to re-render the whole element again
  const videoItems = props.videos.map((video) => {
    return <VideoListItem key={video.etag} video={video} />
  });

  return(
    <ul className="col-md-4 list-group">
      { videoItems }
    </ul>
  )
}


export default VideoList;
