import "./Home.scss";
import { Component } from "react";
import Video from "../../components/Video/Video";
import VideoInfo from "../../components/VideoInfo/VideoInfo";
import VideoList from "../../components/VideoList/VideoList";
import Comments from "../../components/Comments/Comments";

import axios from "axios";
import { API_KEY, API_URL } from "../../utilities/api";

document.title = "BrainFlix";
class Home extends Component {
  state = {
    videos: null,
    activeVideo: null,
  };

  getActiveVideo(videoId) {
    return axios
      .get(`${API_URL}videos/${videoId}?api_key=${API_KEY}`)
      .then((response) => {
        this.setState({
          activeVideo: response.data,
        });
      })
      .catch((err) => console.log(err));
  }

  componentDidMount() {
    axios
      .get(`${API_URL}videos/?api_key=${API_KEY}`)

      .then((response) => {
        this.setState({
          videos: response.data,
        });

        const activeVideoId = this.props.match.params.id || response.data[0].id;
        this.getActiveVideo(activeVideoId);
      })
      .catch((err) => console.log(err));
  }

  componentDidUpdate(prevProps) {
    const prevId = prevProps.match.params.id;
    const currId = this.props.match.params.id;

    if (prevId !== currId) {
      this.getActiveVideo(currId);
    }
  }

  render() {
    const { videos, activeVideo } = this.state;
    if (videos === null || activeVideo === null) {
      return <main className="loading">Loading...</main>;
    }

    const { image } = activeVideo;

    return (
      <>
        <main>
          <Video image={image} />
          <div className="video-wrapper">
            <div className="video-wrapper__left">
              <VideoInfo activeVideo={activeVideo} />
              <Comments activeVideo={activeVideo} />
            </div>
            <VideoList videos={videos} />
          </div>
        </main>
      </>
    );
  }
}

export default Home;
