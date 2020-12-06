import React from "react";
import VideoItem from "./VideoItem";
import "./VideoList.css";

const VideoList = (props) => {
  const videoListClick = (video_Id, videoDesc, videoTitle) => {
    props.handleItemClick(video_Id, videoDesc, videoTitle);
    console.log("item was clicked");
    console.log(video_Id);
  };

  const list = props.videos.map((video) => {
    return (
      <VideoItem
        key={video.etag}
        video={video}
        onVideoItemClick={videoListClick}
      />
    );
  });
  return (
    <div className="videoList">
      <ul style={{ listStyleType: "none" }}>{list}</ul>
    </div>
  );
};

export default VideoList;
