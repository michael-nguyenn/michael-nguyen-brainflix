import "./Video.scss";

function Video({ selectedVideo }) {
  return (
    <div className="video">
      <div className="video__wrapper">
        <video className="video__main" controls poster={selectedVideo.image}>
          <source className="video__source" src="/"></source>
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}

export default Video;
