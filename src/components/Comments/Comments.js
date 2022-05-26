import "./Comments.scss";

function Comments() {
  return (
    <div className="comment">
      <div className="comment__container">
        <h4 className="comment__count">3 Comments</h4>

        <div className="form">
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
              They BLEW the ROOF off at their last event, once everyone started
              figuring out they were going. This is still simply the greatest
              opening of an event I have EVER witnessed.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Comments;
