import "./Home.scss";
import { Component } from "react";
import Video from "../../components/Video/Video";
import VideoInfo from "../../components/VideoInfo/VideoInfo";
import VideoList from "../../components/VideoList/VideoList";
import Comments from "../../components/Comments/Comments";
import videoDetails from "../../data/video-details.json";
import videos from "../../data/videos.json";

class Home extends Component {
  state = {
    selectedVideo: videoDetails[0],
  };

  handleVideoClick = (videoId) => {
    const newSelectedVideo = videoDetails.find((video) => videoId === video.id);

    this.setState({
      selectedVideo: newSelectedVideo,
    });
  };

  render() {
    const nonSelectedVideo = videos.filter((video) => {
      return video.id !== this.state.selectedVideo.id;
    });

    return (
      <>
        <main>
          <Video selectedVideo={this.state.selectedVideo} />
          <div className="video-wrapper">
            <div className="video-wrapper__left">
              <VideoInfo selectedVideo={this.state.selectedVideo} />
              <Comments selectedVideo={this.state.selectedVideo} />
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

export default Home;
