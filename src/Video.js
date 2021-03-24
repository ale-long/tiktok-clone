import React from 'react'
import "./Video.css"
import videofile from './Videos/first_video.mp4'
function Video() {
    return (
        <div className="video">
            <video className="video__player" loop src={videofile} type="video/mp4"></video>
            {/* VideoFooter */}
            {/* VideoSidebar */}
        </div>
    )
}

export default Video
