import "./VideoInfo.scss";
import viewsIcon from "../../assets/Icons/views.svg";
import likesIcon from "../../assets/Icons/likes.svg";
import convertTimeToDate from "../../utilities/dateUtils";

function VideoInfo({ activeVideo }) {
  const { title, channel, timestamp, views, likes, description } = activeVideo;

  return (
    <section className="video-info">
      <h1 className="video-info__title">{title}</h1>
      <div className="video-info__container">
        <div className="video-info__primary">
          <h4 className="video-info__channel">{`By: ${channel}`}</h4>
          <p className="video-info__date">
            {convertTimeToDate(new Date(timestamp))}
          </p>
        </div>

        <div className="video-info__secondary">
          <img className="video-info__icon" src={viewsIcon} alt="Views Icon" />
          <p className="video-info__count">{views}</p>

          <img className="video-info__icon" src={likesIcon} alt="Likes Icon" />
          <p className="video-info__count">{likes}</p>
        </div>
      </div>

      <p className="video-info__description">{description}</p>
    </section>
  );
}

export default VideoInfo;
