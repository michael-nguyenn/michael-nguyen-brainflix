import { Component } from "react";
import "./App.scss";
import Navigation from "./components/Navigation/Navigation";
import Video from "./components/Video/Video";
import VideoInfo from "./components/VideoInfo/VideoInfo";
import Comments from "./components/Comments/Comments";
import VideoList from "./components/VideoList/VideoList";
import videoDetails from "./data/video-details.json";
import videos from "./data/videos.json";

class App extends Component {
  state = {
    selectedVideo: videoDetails[0],
  };

  handleVideoClick = (videoId) => {
    const newSelectedVideo = videoDetails.find((video) => videoId === video.id);

    this.setState({
      selectedVideo: newSelectedVideo,
    });
  };

  convertTimeToDate(time) {
    return time.toLocaleDateString("en-US", {
      month: "2-digit",
      day: "2-digit",
      year: "numeric",
    });
  }

  render() {
    const nonSelectedVideo = videos.filter((video) => {
      return video.id !== this.state.selectedVideo.id;
    });

    return (
      <>
        <header>
          <Navigation />
        </header>

        <main>
          <Video selectedVideo={this.state.selectedVideo} />
          <div className="video-wrapper">
            <div className="video-wrapper__left">
              <VideoInfo
                selectedVideo={this.state.selectedVideo}
                convertTimeToDate={this.convertTimeToDate}
              />
              <Comments
                selectedVideo={this.state.selectedVideo}
                convertTimeToDate={this.convertTimeToDate}
              />
            </div>
            <VideoList
              videos={nonSelectedVideo}
              handleVideoClick={this.handleVideoClick}
            />
          </div>
        </main>
      </>
    );
  }
}

export default App;
