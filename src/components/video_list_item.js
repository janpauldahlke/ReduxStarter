import React from 'react';
                    //(props) an diesem hängt video
const VideoListItem = ({ video }) => {
  //nomral syntax for (props)
  //const video = props.video;
  //but ES6 gievs us ({video}) and its idential

    console.log(video);
  return(
     <li>
      <ul className="list-group">
        <li className="list-group-item">{ video.snippet.title }</li>
        <li className="list-group-item">{ video.snippet.channelTitle }</li>
        <li className="list-group-item">{ video.snippet.description }</li>
      </ul>
     </li>
  )
}

export default VideoListItem;
