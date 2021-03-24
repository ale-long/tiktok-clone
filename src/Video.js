import React, { useRef, useState } from 'react'
import "./Video.css"
import videofile from './Videos/first_video.mp4'
function Video() {
    const [playing, setPlaying] = useState(false);
    
    const videoRef = useRef(null);
    
    const handleVideoPress = () => {
        if (playing) {
            // if video is playing, stop it    
            videoRef.current.pause();
            setPlaying(false);
        } else {
            // otherwise if it's not playing, play it
            videoRef.current.play();
            setPlaying(true);
        }
    }

    return (
        <div className="video">
            <video className="video__player" onClick={handleVideoPress} loop ref={videoRef} src={videofile} type="video/mp4"></video>
            {/* VideoFooter */}
            {/* VideoSidebar */}
        </div>
    )
}

export default Video
