import "./VideoList.scss";

function VideoList({ videos, handleVideoClick }) {
  return (
    <article className="video-list">
      <h3 className="video-list__title">NEXT VIDEOS</h3>
      {videos.map((video) => {
        return (
          <article
            className="video-side"
            key={video.id}
            onClick={() => {
              handleVideoClick(video.id);
            }}
          >
            <div className="video-side__image">
              <img
                className="video-side__thumbnail"
                src={video.image}
                alt={`${video.title} by: ${video.channel}`}
              />
            </div>

            <div className="video-side__container">
              <p className="video-side__title">{video.title}</p>
              <h4 className="video-side__channel">{video.channel}</h4>
            </div>
          </article>
        );
      })}
    </article>
  );
}

export default VideoList;
