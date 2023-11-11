import Videos from "./Components/Videos";
import videos from "./Data/Data";
import './App.css'
import PlayButton from "./Components/PlayButton";
import { useState } from "react";
import AddVideo from "./Components/AddVideo";
export default function App() {
  const [newVideo, setNewVideo] = useState(videos);
  let newVedioObject = (obj) => {
    // console.log(obj)
    setNewVideo([...newVideo , { ...obj,id: newVideo.length+1}])
    // console.log([...newVideo , { ...obj,id: newVideo.length+1}])
  }

  return (
    <>
      <h1 style={{ textAlign: 'center', textDecoration: 'underline' }}>Video Tutorials</h1>
      <AddVideo newVedioObject={newVedioObject} ></AddVideo>
      {/* <button onClick={newVedioObject}>AddVedio</button> */}
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {
          newVideo.map(video => <Videos course={video.course}
            key={video.id}
            channel={video.channel}
            views={video.views}
            created={video.created}
            isVerified={video.isVerified}
            id={video.id}>
            <PlayButton
              onPlay={() => console.log('Play:' + video.course)}
              onPause={() => console.log('Pause' + video.course)}
            >{video.course}</PlayButton>
          </Videos>
          )
        }
      </div>
    </>
  );

}
