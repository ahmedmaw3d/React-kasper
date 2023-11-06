import React from 'react';
import ReactPlayer from 'react-player'
function Video() {
  return (
    <div>
      <div className="video">
      <ReactPlayer url='https://www.youtube.com/watch?v=LXb3EKWsInQ' />
      </div>
    </div>)
}
export default Video