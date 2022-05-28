import "./Comments.scss";
import avatar from "../../assets/Images/Mohan-muruge.jpg";

function Comments({ selectedVideo, convertTimeToDate }) {
  const comments = selectedVideo.comments;

  return (
    <div className="comment">
      <div className="comment__container">
        <h4 className="comment__count">3 Comments</h4>

        <div className="form">
          <img className="avatar" src={avatar} alt="Avatar Image" />

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
        {comments.map((comment, index) => {
          return (
            <div className="comments__card" key={index}>
              <div className="comments__icon"></div>
              <div className="comments__container">
                <p className="comments__name">{comment.name}</p>
                <p className="comments__date">
                  {convertTimeToDate(new Date(comment.timestamp))}
                </p>
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
