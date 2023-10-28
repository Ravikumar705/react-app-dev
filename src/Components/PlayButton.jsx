import React, { useState } from 'react'
import '../App.css'
export default function PlayButton({children,onPlay,onPause}) {
  const [playing, setPlaying] = useState(false);
  let handleClick =()=>{
    if(playing) onPause();
    else onPlay();
    setPlaying(!playing)
  }
  return (
    <div>
      <button className='playButton' onClick={handleClick}>{`${children} `}{playing ? '⏸' : '▶'}</button>
    </div>
  )
}
