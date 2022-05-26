import "./App.scss";
import Navigation from "./components/Navigation/Navigation";
import Video from "./components/Video/Video";
import VideoInfo from "./components/VideoInfo/VideoInfo";
import VideoList from "./components/VideoList/VideoList";

function App() {
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
