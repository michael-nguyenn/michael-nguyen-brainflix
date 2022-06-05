import "./VideoList.scss";
import { Link } from "react-router-dom";

function VideoList({ nonActiveVideos }) {
  return (
    <article className="video-list">
      <h3 className="video-list__title">NEXT VIDEOS</h3>
      {nonActiveVideos.map((video) => {
        return (
          <Link
            to={`/videos/${video.id}`}
            className="video-side"
            key={video.id}
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
          </Link>
        );
      })}
    </article>
  );
}

export default VideoList;
