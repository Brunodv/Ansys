import React from "react"
import ReactPlayer from "react-player"

const Video = ()=> { 
    return(
    <>
   <div className="player-wrapper" style={{"width":"50%", "height":"300px", "margin":"0 auto"}}>
      <ReactPlayer 
        className="react-player"
        url="https://www.youtube.com/watch?v=MgiQ4y28jag"
        width="100%"
        height="100%"
      />
    </div>
    </>)
        
    }

export default Video