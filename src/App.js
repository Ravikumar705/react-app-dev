import Videos from "./Components/Videos";
import videos from "./Data/Data";
import './App.css'

export default function App() {
  let data = videos.map(video => <Videos course={video.course}
    channel={video.channel}
    views={video.views}
    created={video.created}
    isVerified={video.isVerified}
    id={video.id} />)
    
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {data}
    </div>
  );

}
