import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos, vidSelect }) => {
  const renderedList = videos.map(video => {
    return (
      <VideoItem key={video.id.videoId} vidSelect={vidSelect} video={video} />
    );
  });
  return <div className="ui relaxed divided list">{renderedList}</div>;
};

export default VideoList;
