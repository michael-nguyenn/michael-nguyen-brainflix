import "./Video.scss";

function Video({ selectedVideo }) {
  return (
    <div className="video">
      <video className="video__main" controls poster={selectedVideo.image}>
        <source className="video__source" src="/"></source>
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default Video;
