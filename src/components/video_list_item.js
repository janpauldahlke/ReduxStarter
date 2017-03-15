import React from 'react';
                    //(props) an diesem hängt video
const VideoListItem = ({ video }) => {
  //nomral syntax for (props)
  //const video = props.video;
  //but ES6 gievs us ({video}) and its idential


  //for simplifying things ill use a lot of bootstrap here as suggested
    console.log(video);

  const ImageURL = video.snippet.thumbnails.default.url;
  const VideoName = video.snippet.title;

  return(
   <li className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object"  src={ ImageURL } />
        </div>

        <div className="media-body">
          <div className="media-heading">{ VideoName }</div>
        </div>
      </div>
    </li>
  )
}

export default VideoListItem;
