//as functional component, due it will not need any states

import React from 'react';



const VideoDetail = ({ video }) => {
//to prevent undefined on 1st render while yt key is still in quee we need to check fpr !undefined
  if(!video) {
    return (
      <div>Loading your content...</div>
    )
  }

//yt api
//craft an url depending on url and id, compose it by you own
  const VideoID = video.id.videoId;
  const url = "https://www.youtube.com/embed/" + VideoID;
  //as ES6 magic
  //const url = `https://www.youtube.com/embed/${VideoID}`;

  console.log(url);
  //css problem on embed-responsive . it produces height0, fix it the hard way in index.html <style>
  return(
      <div className="video-detail col-md-8 container-fluid">
        <div className="embed-responsive embed-responsive-16by9">
          <iframe className="embed-responsive-item" src={url} ></iframe>
        </div>
        <div className="details">
          <div className="video-item__title">{ video.snippet.title }</div>
          <div className="video-item__detail">{ video.snippet.description }</div>
        </div>
      </div>
  )
};


//exports
export default VideoDetail;
