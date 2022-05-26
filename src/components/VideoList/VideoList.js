import "./VideoList.scss";

function VideoList() {
  return (
    <div className="video-wrapper__right">
      <article className="video-list">
        <h4 className="video-list__title">NEXT VIDEO</h4>
        <article className="video-side">
          <img
            className="video-side__thumbnail"
            src="/"
            alt="Video Thumbnail"
          />
          <div className="video-side__container">
            <p className="video-side__title">
              Become A Travel Pro In One Easy Lesson
            </p>
            <h4 className="video-side__channel">Todd Welch</h4>
          </div>
        </article>
      </article>
    </div>
  );
}

export default VideoList;
