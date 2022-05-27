import "./VideoList.scss";

function VideoList({ videos, handleVideoClick }) {
  return (
    <div className="video-wrapper__right">
      <article className="video-list">
        <h4 className="video-list__title">NEXT VIDEO</h4>
        {videos.map((video) => {
          return (
            <article
              className="video-side"
              key={video.id}
              onClick={() => {
                handleVideoClick(video.id);
              }}
            >
              <img
                className="video-side__thumbnail"
                src={video.image}
                alt="Video Thumbnail"
              />
              <div className="video-side__container">
                <p className="video-side__title">{video.title}</p>
                <h4 className="video-side__channel">{video.channel}</h4>
              </div>
            </article>
          );
        })}
      </article>
    </div>
  );
}

export default VideoList;
