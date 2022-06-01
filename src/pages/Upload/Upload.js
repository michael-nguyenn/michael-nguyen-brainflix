import "./Upload.scss";
import { Link } from "react-router-dom";
import videoThumbnail from "../../assets/Images/Upload-video-preview.jpg";

function Upload() {
  return (
    <section className="publish">
      <h1 className="publish__title">Upload Video</h1>

      <form className="publish-form">
        <div className="publish-form__wrapper">
          <div className="publish-thumbnail">
            <h4 className="publish-thumbnail__container">VIDEO THUMBNAIL</h4>
            <img
              className="publish-thumbnail__picture"
              src={videoThumbnail}
              alt="video thumbnail"
            />
          </div>

          <div className="publish-form__container">
            <label className="publish-form__name">
              TITLE YOUR VIDEO
              <input
                className="publish-form__input"
                type="text"
                placeholder="Add a title to your video"
                name="name"
              ></input>
            </label>

            <label className="publish-form__name">
              ADD A VIDEO DESCRIPTION
              <textarea
                className="publish-form__input publish-form__input--large"
                type="text"
                placeholder="Add a description to your video"
                name="description"
              ></textarea>
            </label>
          </div>

          <div className="publish-form__button">
            <button className="button button--form button--publish">
              <Link to="/" className="button__link">
                PUBLISH
              </Link>
            </button>

            <Link className="publish-form__cancel">CANCEL</Link>
          </div>
        </div>
      </form>
    </section>
  );
}

export default Upload;
