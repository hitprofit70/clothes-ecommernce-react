import React from 'react'
import ReactPlayer from 'react-player'

const Playvideo = () => {
  return (
    <div>
      <div className='play-video'>
      <ReactPlayer url='https://youtu.be/3s5h-0bHlOo' className='video-src' width="100%"/>
      </div>
    </div>
  )
}

export default Playvideo