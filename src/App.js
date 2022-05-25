import "./App.scss";

function App() {
  return (
    <>
      {/* NAV COMPONENT */}
      <header>
        <nav className="nav">
          {/* LOGO COMPONENT */}
          <a className="logo" href="/">
            <img
              className="logo__image"
              src="./assets/Logo/BrainFlix-logo.svg"
              alt="Brainflix Logo"
            />
          </a>

          <div className="nav__container">
            <div className="nav__search">
              <input className="nav__input"></input>
              {/* AVATAR COMPONENT */}
              <div className="avatar">
                <img
                  src="./assets/Images/Mohan-muruge.jpg"
                  alt="Avatar Image"
                  className="avatar__image"
                />
              </div>

              <a className="nav__upload" href="/">
                Upload
              </a>
            </div>
          </div>
        </nav>
      </header>

      {/* VIDEOS COMPONENT */}
      <main>
        <div className="video">
          <video className="video__main" width="320" heigh="240" controls>
            <source className="video__source" src="/"></source>
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="video-wrapper">
          <div className="video-wrapper__left">
            {/* VIDEO INFO COMPONENT */}
            <div className="video-info">
              <h1 className="video-info__title">
                BMX Rampage: 2021 Highlights
              </h1>
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
                On a gusty day in Southern Utah, a group of 25 daring mountain
                bikers blew the doors off what is possible on two wheels,
                unleashing some of the biggest moments the sport has ever seen.
                While mother nature only allowed for one full run before the
                conditions made it impossible to ride, that was all that was
                needed for event veteran Kyle Strait, who won the event for the
                second time -- eight years after his first Red Cow Rampage
                title.
              </p>
            </div>

            {/* COMMENTS COMPONENT */}
            <div className="comments">
              <div className="comments__container">
                <h4 className="comments__count">3 Comments</h4>

                <div className="form">
                  {/* AVATAR COMPONENT */}
                  <div className="avatar">
                    <img className="avatar__image" src="/" alt="Avatar Image" />
                  </div>

                  {/* NEW COMMENT COMPONENT */}
                  <form className="new-comment__form">
                    <label className="new-comment__label">
                      JOIN THE CONVERSATION
                      <textarea
                        placeholder="Add a comment"
                        className="new-comment__input"
                      ></textarea>
                    </label>
                    <button className="new-comment__button">COMMENT</button>
                  </form>
                </div>
              </div>

              {/* COMMENTS COMPONENT */}
              <div className="comments">
                <div className="comments__card">
                  <div className="comments__icon"></div>
                  <div className="comments__container">
                    <p className="comments__name">Micheal Lyons</p>
                    <p className="comments__date">08/09/2021</p>
                    <p className="comments__entry">
                      They BLEW the ROOF off at their last event, once everyone
                      started figuring out they were going. This is still simply
                      the greatest opening of an event I have EVER witnessed.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="video-wrapper__right">
            {/* VIDEO LIST COMPONENT */}
            <article className="video-list">
              <h4 className="video-list__title">NEXT VIDEO</h4>

              {/* VIDEO SIDE COMPONENT */}
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
        </div>
      </main>
    </>
  );
}

export default App;
