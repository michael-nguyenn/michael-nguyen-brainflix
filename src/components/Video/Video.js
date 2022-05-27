import "./Video.scss";

function Video({ selectedVideo }) {
  return (
    <div className="video">
      <video
        className="video__main"
        width="320"
        height="180"
        controls
        poster={selectedVideo.image}
      >
        <source className="video__source" src="/"></source>
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default Video;
