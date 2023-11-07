import React from 'react';
import ReactPlayer from 'react-player';
import "./video.css";

const Video = () => {
  return (
    <div class="video">
    <video autoplay muted loop>
      <ReactPlayer url={""}/>
    </video>
    <div class="text">
      <h2>Super Awesome Video Here</h2>
      <p>Its All You Need</p>
      <button>See More</button>
    </div>
  </div>
    )
}
export default Video