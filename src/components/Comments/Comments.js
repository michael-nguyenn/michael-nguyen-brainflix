import "./Comments.scss";

function Comments({ selectedVideo }) {
  const comments = selectedVideo.comments;

  return (
    <div className="comment">
      <div className="comment__container">
        <h4 className="comment__count">3 Comments</h4>

        <div className="form">
          <div className="avatar">
            <img className="avatar__image" src="/" alt="Avatar Image" />
          </div>

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

      <div className="comments">
        {comments.map((comment) => {
          return (
            <div className="comments__card">
              <div className="comments__icon"></div>
              <div className="comments__container">
                <p className="comments__name">{comment.name}</p>
                <p className="comments__date">{comment.timestamp}</p>
                <p className="comments__entry">{comment.comment}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Comments;
