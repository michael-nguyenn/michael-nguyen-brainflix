import "./Comments.scss";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import avatar from "../../assets/Images/Mohan-muruge.jpg";
import convertTimeToDate from "../../utilities/dateUtils";

function Comments({ activeVideo }) {
  const { comments } = activeVideo;

  return (
    <div className="comments">
      <h4 className="comments__count">3 Comments</h4>
      <div className="form">
        <article className="form__icon">
          <img className="form__avatar" src={avatar} alt="Avatar" />
        </article>

        <form className="form__container">
          <label className="form__name">
            JOIN THE CONVERSATION
            <textarea
              type="text"
              placeholder="Add a comment"
              className="form__input"
            ></textarea>
          </label>

          <Link to="/" className="button-wrapper button-wrapper--comment">
            <Button className="button button--comment" name="COMMENT" />
          </Link>
        </form>
      </div>

      <div className="comment">
        {comments.map((comment, index) => {
          return (
            <div className="comment__card" key={index}>
              <div className="comment__icon"></div>
              <div className="comment__container">
                <p className="comment__name">{comment.name}</p>
                <p className="comment__date">
                  {convertTimeToDate(new Date(comment.timestamp))}
                </p>
                <p className="comment__entry">{comment.comment}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Comments;
