import "./VideoInfo.scss";
import Comments from "../Comments/Comments";

function VideoInfo() {
  return (
    <div className="video-wrapper__left">
      <section className="video-info">
        <h1 className="video-info__title">BMX Rampage: 2021 Highlights</h1>
        <div className="video-info__container">
          <div className="video-info__primary">
            <h4 className="video-info__channel">By Red Crow</h4>
            <p className="video-info__date">07/11/2021</p>
          </div>

          <div className="video-info__secondary">
            <img className="video-info__icon" src="/" alt="Views Icon" />
            <p className="video-info__count">1,001,023</p>

            <img className="video-info__icon" src="/" alt="Likes Icon" />
            <p className="video-info__count">110,985</p>
          </div>
        </div>

        <p className="video-info__description">
          On a gusty day in Southern Utah, a group of 25 daring mountain bikers
          blew the doors off what is possible on two wheels, unleashing some of
          the biggest moments the sport has ever seen. While mother nature only
          allowed for one full run before the conditions made it impossible to
          ride, that was all that was needed for event veteran Kyle Strait, who
          won the event for the second time -- eight years after his first Red
          Cow Rampage title.
        </p>
      </section>

      <Comments />
    </div>
  );
}

export default VideoInfo;
