import "./Video.scss";

function Video() {
  return (
    <div className="video">
      <video className="video__main" width="320" heigh="240" controls>
        <source className="video__source" src="/"></source>
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default Video;
