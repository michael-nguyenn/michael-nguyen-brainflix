import "./Home.scss";
import { API_URL } from "../../utilities/apiUtils";
import { Component } from "react";
import axios from "axios";

import Video from "../../components/Video/Video";
import VideoInfo from "../../components/VideoInfo/VideoInfo";
import VideoList from "../../components/VideoList/VideoList";

class Home extends Component {
  //INITIAL STATE
  state = {
    videos: [],
    activeVideo: null,
  };

  // LIFE CYCLE METHODS

  async componentDidMount() {
    // FIRST AXIOS CALL TO GRAB  ALL VIDEOS
    const videos = await axios
      .get(`${API_URL}`)
      .catch((err) => console.log(err));

    // GRABBING ACTIVE VIDEO ID OR DEFAULTING TO FIRST VIDEO OBJECT IN ARRAY
    const activeVideoId = this.props.match.params.id || videos.data[0].id;

    // SECOND AXIOS CALL TO GRAB SPECIFIC VIDEO ID
    const activeVideo = await this.getVideoById(activeVideoId).catch((err) =>
      console.log(err)
    );

    // SETTING STATE
    this.setState({
      videos: videos.data,
      activeVideo: activeVideo.data,
    });
  }

  componentDidUpdate(prevProps) {
    let videoId = this.props.match.params.id;
    const prevVideoId = prevProps.match.params.id;

    // IF NEW VIDEO ID IS GENERATED
    if (videoId !== prevVideoId) {
      // SETTING VIDEO ID DEPENDING IF THERE IS A VALID URL OR NOT

      typeof videoId === "undefined"
        ? (videoId = this.state.videos[0].id)
        : (videoId = this.props.match.params.id);

      // MAKING AXIOS CALL AND SETTING STATE
      this.getVideoById(videoId)
        .then((response) => {
          this.setState({
            activeVideo: response.data,
          });
        })
        .then(window.scrollTo(0, 0))
        .catch((err) => console.log(err));
    }
  }

  // GETTING VIDEO BY ID
  getVideoById = (videoId) => {
    return axios.get(`${API_URL}/${videoId}`);
  };

  render() {
    // SETTING CONDITIONAL TO ENSURE THAT DATA IS RETRIEVED BEFORE PASSING INTO OTHER COMPONENTS
    const { videos, activeVideo } = this.state;
    if (videos === null || activeVideo === null) {
      return <main className="loading">Loading...</main>;
    }

    const { image } = activeVideo;

    // FILTERING THROUGH VIDEO LIST AND RETURNING NON ACTIVE VIDEOS
    const nonActiveVideos = this.state.videos.filter((video) => {
      return video.id !== this.state.activeVideo.id;
    });

    return (
      <main>
        {/* SHORT CIRCUIT... ISUPLOADED:TRUE && <BUTTON></BUTTON>*/}
        {/* <h1 {...this.props}>VIDEO SUCCESS??</h1> */}
        <h1>UPLOAD SUCCESS</h1>
        {/* ONCE THIS RENDERS, WE NEED TO TOGGLE ISUPLOADED BACK TO FALSE */}
        <Video image={image} />
        <div className="video-wrapper">
          <VideoInfo activeVideo={activeVideo} />
          <VideoList nonActiveVideos={nonActiveVideos} />
        </div>
      </main>
    );
  }
}

export default Home;
