import "./App.scss";
import Navigation from "./components/Navigation/Navigation";
import Video from "./components/Video/Video";
import VideoInfo from "./components/VideoInfo/VideoInfo";
import VideoList from "./components/VideoList/VideoList";
import VideoDetails from "./data/video-details.json";
import Videos from "./data/videos.json";

function App() {
  console.log(VideoDetails);
  console.log(Videos);

  return (
    <>
      <header>
        <Navigation />
      </header>

      <main>
        <Video />
        <div className="video-wrapper">
          <VideoInfo />
          <VideoList />
        </div>
      </main>
    </>
  );
}

export default App;
